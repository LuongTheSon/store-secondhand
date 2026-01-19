import React, { useState } from 'react';
import styles from './styles.module.scss';

const Login = () => {
  const [currentState, setCurrentState] = useState('LOGIN');
  const { login, loginTitle, loginForm, loginRow, loginChange, loginButton } = styles;
  return (
    <section className={login}>
      <div className='row'>
        <h2 className={loginTitle}>{currentState}</h2>
        <div className={loginForm}>
          <form action=''>
            {currentState === 'LOGIN' ? (
              ''
            ) : (
              <div className={loginRow}>
                <input type='text' placeholder='User Name' />
              </div>
            )}
            <div className={loginRow}>
              <input type='email' placeholder='Email' />
            </div>
            <div className={loginRow}>
              <input type='password' placeholder='Password' />
            </div>
            <div className={loginChange}>
              {currentState === 'LOGIN' ? (
                <>
                  <p>Forgot your password</p>
                  <p onClick={() => setCurrentState('SIGN UP')}>Create account</p>
                </>
              ) : (
                <p onClick={() => setCurrentState('LOGIN')}>You have a account</p>
              )}
            </div>
            <button className={loginButton}>
              {currentState === 'LOGIN' ? 'Login' : 'Sign Up'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
