import { Form, Link, useActionData, useLoaderData, useMatches, useNavigation, useParams } from "@remix-run/react";

function ExpenseForm() {
  // console.log(expense)
  // const expenseData = useLoaderData();
  // ----------HOOKS--------------------
    const params = useParams();
    const validateInput = useActionData()
    const navigate = useNavigation()
    const matches = useMatches();
  // -----------------------------------
    const expense = matches.find((match:any)=> match.id === 'routes/__app/expenses')?.data
    const expenseData = expense.find((exp:any)=>exp.id === params.id)
    const today = new Date().toISOString().slice(0, 10);
    const isSubmitting = navigate.state !== 'idle'

    const defaultValue = expenseData? {
      title : expenseData.title,
      amount : expenseData.amount,
      date : expenseData.date
    } :
    {
      title : '',
      amount : '',
      date : ''
    }
    return (
      <Form 
      method={expenseData ? "patch" : "post"} 
      className="form" 
      id="expense-form"
      // onSubmit={handleSubmit}
      >
        <p>
          <label htmlFor="title">Expense Title</label>
          <input type="text" id="title" name="title" required maxLength={30} defaultValue={defaultValue.title} />
        </p>
  
        <div className="form-row">
          <p>
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              name="amount"
              min="0"
              step="0.01"
              defaultValue={defaultValue.amount}
              required
            />
          </p>
          <p>
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" max={today} required defaultValue={defaultValue? defaultValue.date.slice(0, 10) : ''} />
          </p>
        </div>
        <div>
          {
            validateInput && (
              <ul>
                {
                  Object.values(validateInput).map((error:any)=>(
                    <li key={error}>{error}</li>
                  ))
                }
              </ul>
            )
          }
        </div>
        <div className="form-actions">
          <button disabled={isSubmitting}>{isSubmitting? 'Saving...' : 'Save Expense'}</button>
          <Link to={'..'}>Cancel</Link>
        </div>
      </Form>
    );
  }
  
  export default ExpenseForm;
  