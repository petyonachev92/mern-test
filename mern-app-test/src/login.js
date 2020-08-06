import React from 'react'

function Login () {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="login-username">Username:</label>
          <input id="login-username" type="text" placeholder="Username"/>
          <label htmlFor="login-password">Password:</label>
          <input id="login-password" type="password" placeholder="Password"/>
        </div>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
