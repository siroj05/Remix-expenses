import { Link, Outlet, useLoaderData } from "@remix-run/react";
import expenseStyles from '~/styles/expenses.css'
import ExpensesList from "~/components/expenses/ExpensesList";
import { FaPlus, FaDownload } from "react-icons/fa";
import { getExpenses } from "~/data/expenses.server";
// import { json } from "@remix-run/node";

export default function Expenses(){
    const data = useLoaderData()
    return(
        <>
            <Outlet/>
            <main>
                <section id="expenses-actions">
                    <Link to={'add'}>
                        <FaPlus/>
                        <span>Add Expanses</span>
                    </Link>
                    <a href="/expenses/raw">
                        <FaDownload/>
                        <span>Download Raw Data</span>
                    </a>
                </section>
                <ExpensesList expenses={data}/>
            </main>
        </>
    )
}

export function loader(){
    return getExpenses();
}

export function links(){
    return[
        {rel : 'stylesheet', href : expenseStyles}
    ]
}