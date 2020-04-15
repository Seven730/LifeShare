import React from "react";
import "./RegisterStyle.css";
import { Link } from "react-router-dom";

export default function Register() {
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
