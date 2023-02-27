import { Outlet } from "@remix-run/react";
import MainHeader from "~/components/navigation/MainHeader";
import marketingStyle from '~/styles/marketing.css'
export default function MarketingLayouteRoutes(){
    return(
        <>
            <MainHeader/>
            <Outlet/>
        </> 
    )
}

export function links(){
    return[
        {rel : 'stylesheet', href : marketingStyle}
    ]
}