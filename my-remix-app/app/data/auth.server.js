import {prisma} from './database.server';
import {hash, compare} from 'bcryptjs'
import { createSessionStorage, redirect } from '@remix-run/node';

const SESSION_SECRET = process.env.SESSION_SECRET

const sessionStorage = createSessionStorage({
    cookie : {
        secure : process.env.NODE_ENV === 'production',
        secrets : [SESSION_SECRET],
        sameSite : 'lax',
        maxAge : 30 * 24 * 60 * 60,
        httpOnly : true
    }
})

export async function getUserFromSession(request){
   const session = await sessionStorage.getSession(request.headers.get('Cookie'));
   const userId = session.get('userId');
   if(!userId){
       return null;
    }
    
    return userId;
}

export async function destroyUserSession(request){
    const session = await sessionStorage.getSession(request.headers.get('Cookie'));
    
    return redirect('/', {
        headers : {
            'Set-Cookie': sessionStorage.destroySession(session)
        }
    })
    
}

export async function createUserSession(userId, redirectPath){
    const session = await sessionStorage.getSession();
    session.set('userId', userId);
    return redirect(redirectPath, {
        headers : {
            'Set-Cookie' : await sessionStorage.commitSession(session)
        }
    });
}

export async function signup({email, password}){
    const existingUser = await prisma.user.findFirst({where : {email}})
    if(existingUser){
        const error = new Error ('A user user with the providede email adress aleardy exist');
        Error.status = 422
        throw error;
    }
    const passwordHash = await hash(password, 12)
    const user = await prisma.user.create({data : {email : email, password : passwordHash}});
    return createUserSession(user.id, '/expenses');
}

export async function login({email, password}){
    const existingUser = await prisma.user.findFirst({where : {email}});
    if(!existingUser){
        const error = new Error ('Could not log you in, please check provided credentials');
        Error.status = 401
        throw error;
    }
    const passwordCorrect = await compare(password, existingUser.password)
    if(!passwordCorrect){
        const error = new Error ('Could not log you in, please check provided credentials');
        Error.status = 401
        throw error;
    }
    createUserSession(existingUser.id, '/expenses');
}