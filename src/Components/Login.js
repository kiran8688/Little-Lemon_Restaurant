import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <section className='login-section'>
      <article>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <form onClick={(e) => { e.preventDefault(); }}>
          <fieldset>
            <legend align="center">Login Details </legend>

            <div id='input'>
              <label htmlFor='username' className='input-label'>
                User Name:
              </label>
              <input type='email' name='username' autoComplete='off' id='username' required placeholder='Enter User Name' ></input>
            </div>

            <div id='input'>

              <label htmlFor='password' className='input-label'>
                Password:
              </label>
              <input type='password' min={3} autoComplete="off" name='password' id='password' placeholder='Enter Password' ></input>
            </div>
          </fieldset>
          <Link type='submit' to='/reservations' >Submit</Link>
        </form>
      </article>

    </section>
  )
}

export default Login