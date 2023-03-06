import { redirect } from "@remix-run/node"
import { useNavigate } from "@remix-run/react"
import ExpenseForm from "~/components/expenses/ExpensesForm"
import Modal from "~/components/util/Modal"
import { deleteExpense, updateExpense } from "~/data/expenses.server"
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
    if(request.method === "PATCH"){
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
    else if(request.method === "DELETE"){
        await deleteExpense(expenseId)
        return {deleteId : expenseId}
    }
}

// export async function loader({params}:any){
//     const expendId = params.id
//     const expenses = await getExpense(expendId);
//     return expenses;
// }