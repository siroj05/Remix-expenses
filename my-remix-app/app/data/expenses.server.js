import {prisma} from './database.server';

export async function addExpense(expenseData, userId){
    try{
        return await prisma.expense.create({
            data:{
                title : expenseData.title,
                amount : +expenseData.amount,
                date : new Date(expenseData.date),
                User : {connect : {id : userId}}
            }
        });
    }
    catch (error){
        throw new Error('Failed to add data')
    }
}

export async function getExpenses(userId){
    if(!userId){
        throw new Error('Failed to get expenses')
    }
    try {
        const expenses = await prisma.expense.findMany({
            where : {userId},
            orderBy : {
                date : 'desc'
            }
        })
        return expenses
    } catch (error) {
        throw new Error('Failed to fetch')
    }
}

export async function getExpense(id){
    try {
        const expenses = await prisma.expense.findFirst({where : {id}});
        return expenses;
    } catch (error) {
        throw new Error('Failed to fetch')
    }
}

export async function updateExpense(id, expenseData){
    try {
        const expenses = await prisma.expense.update(
            {
                where : {id},
                data:{
                    title : expenseData.title,
                    amount : +expenseData.amount,
                    date : new Date(expenseData.date)
                }
            }
        )
    } catch (error) {
        throw new Error('Failed to update')
    }
}

export async function deleteExpense(id){
    try {
        await prisma.expense.delete({
            where : {id}
        })
    } catch (error) {
        throw new Error('Failed to delete')
    }
}