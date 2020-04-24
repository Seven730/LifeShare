import React from "react";
import "./LoginStyle.css";
import { Link } from "react-router-dom";
import EmailLoginForm from "./Forms/EmailLoginForm";
// import FacebookLoginForm from './Forms/FacebookLoginForm'

export default function Login() {
  return (
    <div>
      <div className="auth-wrapper">
        <div className="in-wrapper">
          <div className="col-md">
            <h3>Login</h3>
            <EmailLoginForm />
            {/* <FacebookLoginForm /> */}
            <p>Twitter</p>
            <div>
              <Link to="/">back</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
