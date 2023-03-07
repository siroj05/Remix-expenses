import authStyle from '~/styles/auth.css'
import AuthForm from '~/components/auth/AuthForm'
import { validateCredentials } from '~/data/validation.server';
import {login, signup} from '~/data/auth.server'
import { redirect } from '@remix-run/node';
export default function Auth(){
    return <AuthForm/>;
}

export async function action({request}:any){
    const searchParams = new URL(request.url).searchParams;
    const authMode = searchParams.get('mode') || 'login';
    const formData = await request.formData();
    const credentials : any = Object.fromEntries(formData);
    try {
        validateCredentials(credentials);
    } catch (error) {
        return error
    }

    try {
        if(authMode === 'login'){
            return await login(credentials)
        }else{
            return await signup(credentials);
        //    return redirect('/expenses');
        }
    } catch (error : any) {
        if(error.status === 422){
            return {credentials : error.message}
        }
    }
}

export function links(){
    return[{rel : 'stylesheet', href:authStyle}]
}