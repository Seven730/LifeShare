import React from "react";
import "./RegisterStyle.css";
import RegisterForm from "./RegisterForm";

export default function Register() {
  return (
    <div className={'grid'}>
      <div className={'card'}>
        <RegisterForm />
      </div>
      {/* <Link to="/">back</Link> */}
    </div>
  );
}
