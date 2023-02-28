import { redirect } from "@remix-run/node";
import { useNavigate } from "@remix-run/react"
import ExpenseForm from "~/components/expenses/ExpensesForm"
import Modal from "~/components/util/Modal"
import { addExpense } from '~/data/expenses.server'
export default function AddExpansesPages(){

    const navigate = useNavigate();
    const closeHandler = () => {
        navigate('..');
    }

    return(
        <Modal onClose = {closeHandler}>
            <ExpenseForm/>
        </Modal>
    )
}

export async function actions({request}:any){
    const formData = await request.formData();
    const expenseData = Object.fromEntries(formData);
    console.log(expenseData, formData)
    await addExpense(expenseData);
    return redirect('/expenses');
}