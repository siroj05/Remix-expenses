import ExpenseStatistics from "~/components/expenses/ExpenseStatistics"
import Chart from "~/components/expenses/Chart"
import { getExpenses } from "~/data/expenses.server"
import { useLoaderData } from "react-router"
export default function ExpansesAnalysisPages(){
    const expenseData = useLoaderData()
    return(
        <main>
            <Chart expenses={expenseData}/>
            <ExpenseStatistics expenses={expenseData}/>
        </main>
    )
}

export async function loader(){
    const expenseData = await getExpenses()
    // if(!expenseData){

    // }
    return expenseData
}