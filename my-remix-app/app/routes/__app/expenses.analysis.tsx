import ExpenseStatistics from "~/components/expenses/ExpenseStatistics"
import Chart from "~/components/expenses/Chart"
import { getExpenses } from "~/data/expenses.server"
import { useLoaderData } from "react-router"
import Error from "~/components/util/Error"
import { useCatch } from "@remix-run/react"
export default function ExpansesAnalysisPages(){
    const expenseData = useLoaderData()
    return(
        <main>
            <Chart expenses={expenseData}/>
            <ExpenseStatistics expenses={expenseData}/>
        </main>
    )
}

export function CatchBoundary(){
    const caughtResponse = useCatch()
    return <main>
        <Error title={caughtResponse.statusText}>
            <p>{caughtResponse.data?.message || 'Something went wrong - could not load expense'}</p>
        </Error>
    </main>
}

export async function loader(){
    const expenseData = await getExpenses()
    return expenseData
}