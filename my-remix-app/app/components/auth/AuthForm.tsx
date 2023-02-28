import { useSearchParams, Link } from '@remix-run/react';
import { FaLock, FaUserPlus } from 'react-icons/fa';

function AuthForm() {
  const [searchParams] = useSearchParams()
  const authMode = searchParams.get('mode') || 'login';
  const submitButton = authMode === 'login' ? 'login' : 'Create user';
  const toggleButton = authMode === 'login' ? 'Create a new user' : 'Log in with existing user';
  // console.log(toggleButton)
  return (
    <form method="post" className="form" id="auth-form">
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
      <div className="form-actions">
        <button>{submitButton}</button>
        <Link to={authMode === 'login' ? '?mode=signup' : '?mode=login'}>{toggleButton}</Link>
      </div>
    </form>
  );
}

export default AuthForm;
