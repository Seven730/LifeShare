import React from "react";
import "./LoginStyle.css";
import { Link } from "react-router-dom";
import EmailLoginForm from "./Forms/EmailLoginForm";
// import FacebookLoginForm from './Forms/FacebookLoginForm'

export default function Login() {
  return (
    <div>
      <h1 className="headerRegister">LifeShare</h1>
      <div className="auth-wrapper">
        <div className="in-wrapper">
          <h3>Sign In</h3>
          <EmailLoginForm />
          {/* <FacebookLoginForm /> */}
          {/* <p>Twitter</p> */}
        </div>
      </div>
    </div>
  );
}
