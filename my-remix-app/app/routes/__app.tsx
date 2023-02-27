import { Outlet } from "@remix-run/react";
import expensesStyle from '~/styles/expenses.css'
export default function PathlessLayouteRoutes(){
    return <Outlet/>
}

export function links(){
    return[
        {rel : 'stylesheet', href : expensesStyle}
    ]
}