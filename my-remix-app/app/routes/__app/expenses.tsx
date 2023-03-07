import { Link, Outlet, useLoaderData } from "@remix-run/react";
import expenseStyles from '~/styles/expenses.css'
import ExpensesList from "~/components/expenses/ExpensesList";
import { FaPlus, FaDownload } from "react-icons/fa";
import { getExpenses } from "~/data/expenses.server";
import { json } from "@remix-run/node";
// import { json } from "@remix-run/node";

export default function Expenses(){
    const data = useLoaderData()
    const hasExpenses = data && data.length > 0
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
                {hasExpenses && <ExpensesList expenses={data}/>}
                {!hasExpenses && 
                    <section id="no-expenses">
                        <h1>No expenses found</h1>
                        <p>Start <Link to={'add'}>adding some</Link> today.</p>
                    </section>
                }                
            </main>
        </>
    )
}

export async function loader(){
    const expenses : any = await getExpenses();
    return expenses;
    // if(!expenses || expenses === 0 ){
    //     throw json(
    //         {message : 'Could not find any expenses'},
    //         {status : 404, statusText : 'No expenses found'}
    //     )
    // }
}

// export function CatchBoundary(){
//     return <p>Error</p>
// }

export function links(){
    return[
        {rel : 'stylesheet', href : expenseStyles}
    ]
}