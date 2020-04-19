import React from 'react'
import './LoginStyle.css'
import { Link } from 'react-router-dom'
import EmailLoginForm from './Forms/EmailLoginForm'
// import FacebookLoginForm from './Forms/FacebookLoginForm'
import GoogleLoginForm from './Forms/GoogleLoginForm'
export default function Login() {

  return (
    <div>
      <div className='col-md'>
        <h1>Login</h1>
        <h3>Using email and password</h3>
        <EmailLoginForm />
        <h5>or, use one of these services to login</h5>
        <GoogleLoginForm />
        {/* <FacebookLoginForm /> */}
        <p>Twitter</p>
        <div>
          <Link to='/'>back</Link>
        </div>
      </div>
    </div>
  )
}