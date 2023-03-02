import { redirect } from "@remix-run/node"
import { useNavigate } from "@remix-run/react"
import ExpenseForm from "~/components/expenses/ExpensesForm"
import Modal from "~/components/util/Modal"
import { updateExpense } from "~/data/expenses.server"
import { validateExpenseInput } from "~/data/validation.server"
// import { getExpense } from "~/data/expenses.server"
export default function UpdateExpansesPages(){

    const navigate = useNavigate()
    const closeHandler = ()=> {
        navigate('..');
    }

    return(
        <Modal onClose={closeHandler}>
            <ExpenseForm/>
        </Modal>
    )
}

export async function action({request, params}:any){
    const expenseId = params.id
    const formData = await request.formData()
    const expenseData = Object.fromEntries(formData);
    try {
        validateExpenseInput(expenseData)
    } catch (error) {
        return error
    }
    await updateExpense(expenseId, expenseData)
    return redirect('/expenses');
}

// export async function loader({params}:any){
//     const expendId = params.id
//     const expenses = await getExpense(expendId);
//     return expenses;
// }