import { redirect } from "react-router";

export function loader({params}:any){
    if(params['*']==='exp'){
        redirect('/expenses');
    }

    throw new Response('Not Found', {status : 404});
}