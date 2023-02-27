const DUMMY_EXPENSES = [
    {
        id : 'e1',
        title : 'first expense',
        amount : 12.99,
        date : new Date().toISOString()
    },
    {
        id : 'e2',
        title : 'second expense',
        amount : 16.99,
        date : new Date().toISOString()
    },
]
import { Link, Outlet } from "@remix-run/react";
import expenseStyles from '~/styles/expenses.css'
import ExpensesList from "~/components/expenses/ExpensesList";
import { FaPlus, FaDownload } from "react-icons/fa";

export default function Expenses(){
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
                <ExpensesList expenses={DUMMY_EXPENSES}/>
            </main>
        </>
    )
}

export function links(){
    return[
        {rel : 'stylesheet', href : expenseStyles}
    ]
}