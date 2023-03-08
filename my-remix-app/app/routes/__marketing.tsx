import { Outlet } from "@remix-run/react";
import MainHeader from "~/components/navigation/MainHeader";
import { getUserFromSession } from "~/data/auth.server";
import marketingStyle from '~/styles/marketing.css'
export default function MarketingLayouteRoutes(){
    return(
        <>
            <MainHeader/>
            <Outlet/>
        </> 
    )
}

export function loader({request}:any){
    return getUserFromSession(request);
}

export function links(){
    return[
        {rel : 'stylesheet', href : marketingStyle}
    ]
}