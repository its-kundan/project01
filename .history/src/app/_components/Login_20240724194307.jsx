import React from 'react'

function Login() {
  return (
    <>
        <h3> Login  Page</h3>
        <input className='border-2 ' type="email" placeholder="Email" />
        <br />
        <input className type="password" placeholder="password" />
        <br />
        <button>Login</button>
    </>
  )
}

export default Login