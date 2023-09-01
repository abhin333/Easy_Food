import React from 'react'
import "./LoginBar.css"

const LoginBar = () => {
  return (
    <div>
         <div className="login_btn-parent">
            <div className="login-child">
              <span>Login</span>
            </div>
            <div className="siginup-child">
              <span className="signup">signup</span>
            </div>
          </div>
    </div>
  )
}

export default LoginBar