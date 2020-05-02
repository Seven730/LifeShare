import React from "react";
import "./LoginStyle.css";
import EmailLoginForm from "./Forms/EmailLoginForm";

export default function Login() {
  return (
    <div>
      <h1 className="headerRegister">LifeShare</h1>
      <div className="auth-wrapper">
        <div className="in-wrapper">
          <h3>Sign In</h3>
          <EmailLoginForm />
        </div>
      </div>
    </div>
  );
}
