import React from 'react'
import './login.css'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
        <div className='container'>
            <h2>Login </h2>
            <form action=''>
                <div className='mb-3'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='Enter Email'/>
                </div>

                <div className='mb-3'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' placeholder='Enter Password'/>
                </div>

                <button className='btn btn-success'>Log in</button>
                <p>You are agree to our terms and conditions</p>
                
                <Link to="/signup">
                    <button type="submit" class="btn-submit">BOOK NOW</button>
                </Link>

            </form>
        </div>
    </div>
  )
}

export default Login