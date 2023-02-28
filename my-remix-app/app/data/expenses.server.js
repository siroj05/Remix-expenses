import {prisma} from './database.server';

export async function addExpense(expenseData){
    try{
        return await prisma.expense.create({
            data:{
                title : expenseData.title,
                amount : +expenseData.amount,
                data : new Date(expenseData.date)
            }
        });
    }
    catch (error){
        console.log(error);
        throw error;
    }
}