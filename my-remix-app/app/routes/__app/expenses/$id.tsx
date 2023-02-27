import { useNavigate } from "@remix-run/react"
import ExpenseForm from "~/components/expenses/ExpensesForm"
import Modal from "~/components/util/Modal"
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