import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type="text" placeholder='Your name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have a account?</p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>I agree to the <a href="/">Terms of Service</a> and <a href="/">Privacy Policy</a></p> 
        </div>
      </div>
    </div>
  )
}
