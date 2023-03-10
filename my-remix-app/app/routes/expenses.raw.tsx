import { requireUserSession } from "~/data/auth.server";
import { getExpenses } from "~/data/expenses.server";
export async function loader({request}:any){
    await requireUserSession(request)
    return getExpenses();
}