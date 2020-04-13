import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

export default function register() {
  return (
    <div>
      <div>
        <h1>Register</h1>
      </div>
      <div>
        <Link to="/">back</Link>
      </div>
    </div>
  );
}
