import React from 'react'
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div>
        <div className='container'>
            <h1>Signup</h1>
            <form action=''>

                <div className='`mb3'>
                    <label htmlfor='name'>Name</label>
                    <input type='text' placeholder='Name'/>
                </div>

                <div className='mb-3'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='Enter Email'/>
                </div>


                <div className='mb-3'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' placeholder='Enter Password'/>
                </div>
                <button className='btn btn-success'>Signup</button>
                <p>You are agree to our terms and conditions</p>
                <Link to="/" className='btn btn-default border'>Login</Link> 

            </form>

        </div>
    </div>
  )
}

export default Signup