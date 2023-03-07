import authStyle from '~/styles/auth.css'
import AuthForm from '~/components/auth/AuthForm'
import { validateCredentials } from '~/data/validation.server';
export default function Auth(){
    return <AuthForm/>;
}

export async function action({request}:any){
    const searchParams = new URL(request.url).searchParams;
    const authMode = searchParams.get('mode') || 'login';
    const formData = await request.formData();
    const credentials = Object.fromEntries(formData);
    try {
        validateCredentials(credentials);
    } catch (error) {
        return error
    }
    if(authMode === 'login'){
        // logic
    }else{
        // logic
    }
}

export function links(){
    return[{rel : 'stylesheet', href:authStyle}]
}