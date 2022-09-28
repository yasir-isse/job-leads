import { useState } from 'react';
import Logo from '../components/logo/Logo';

const Login = () => {
  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <section className='form-section'>
      <div className='form-container'>
        <div className='logo-container'>
          <Logo color='dark' />
        </div>

        <div className='form-title'>
          <h2>Login</h2>
        </div>

        <form className='form'>
          <div className='input-container'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' />
          </div>

          <div className='input-container'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password' />
          </div>

          <button type='button' className='hero-btn input-btn' onClick={''}>
            Login
          </button>
        </form>

        <p className='form-submit'>
          Not registered yet?
          <a href='#' className='form-change' onClick={(e) => handleForm(e)}>
            {' Register'}
          </a>
        </p>
      </div>
    </section>
  );
};

export default Login;
