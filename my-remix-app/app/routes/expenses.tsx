import { Outlet } from "@remix-run/react";

export default function Expenses(){
    return(
        <main>
            <h1>Expenses pages</h1>
            <Outlet/>
        </main>
    )
}