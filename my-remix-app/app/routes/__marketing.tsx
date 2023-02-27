import { Outlet } from "@remix-run/react";
import marketingStyle from '~/styles/marketing.css'
export default function MarketingLayouteRoutes(){
    return <Outlet/>
}

export function links(){
    return[
        {rel : 'stylesheet', href : marketingStyle}
    ]
}