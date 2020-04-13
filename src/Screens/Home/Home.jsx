import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function home() {
  return (
    <div>
      <h1 className="header">Welcome!</h1>
      <div className="grid">
        <div className="links">
          <Link to="profile">link do profilu</Link>
          <Link to="login">Login page</Link>
          <Link to="register">Register page</Link>
        </div>
      </div>
    </div>
  );
}
