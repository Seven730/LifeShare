import React from "react";
import "./LoginStyle.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <div>
        <h1>Login</h1>
      </div>
      <div>
        <Link to="/">back</Link>
      </div>
    </div>
  );
}
