import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export default function login() {
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
