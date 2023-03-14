import { useSearchParams, Link, Form, useNavigation, useActionData } from '@remix-run/react';
import { FaLock, FaUserPlus } from 'react-icons/fa';

function AuthForm() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigation();
  const authMode = searchParams.get('mode') || 'login';
  const submitBtnCap = authMode === 'login' ? 'login' : 'Create user';
  const toggleButton = authMode === 'login' ? 'Create a new user' : 'Log in with existing user';
  const isSubmitting = navigate.state !== 'idle'
  const validationErrors = useActionData;
  return (
    <Form method="post" className="form" id="auth-form">
      <div className="icon-img">
        {
          authMode === 'login' ? <FaLock /> : <FaUserPlus/>
        }
      </div>
      <p>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" minLength={7} />
      </p>
      {
        validationErrors && validationErrors && (
          <ul>
            {
              Object.values(validationErrors).map((error:any)=>(
                <li key={error}>{error}</li>
              ))
            }
          </ul>
        )
      }
      <div className="form-actions">
        <button disabled={isSubmitting}>
          {isSubmitting? 'Authenticating...' : submitBtnCap}
        </button>
        <Link to={authMode === 'login' ? '?mode=signup' : '?mode=login'}>{toggleButton}</Link>
      </div>
    </Form>
  );
}

export default AuthForm;
