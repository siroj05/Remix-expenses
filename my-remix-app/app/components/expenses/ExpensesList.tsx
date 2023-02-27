import ExpenseListItem from "./ExpensesListItem";

function ExpensesList({ expenses } : any) {
  // console.log(expenses)

  return (
    <ol id="expenses-list">
      {expenses.map((expense : any) => (
        <li key={expense.id}>
          <ExpenseListItem
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
          />
        </li>
      ))}
    </ol>
  );
}

export default ExpensesList;
