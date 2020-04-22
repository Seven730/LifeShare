import React, { useState } from "react";
import "./AccountStyle.css";
import NavigationBar from "../../Components/NavigationBar";
import UserAuthenticationHandler from "../../Handlers/UserAuthenticationHandler";

export default function Account() {
  const [user, setUser] = useState({});

  UserAuthenticationHandler.addListener((user) => setUser(user));

  return (
    <div>
      <NavigationBar />
      <div className="auth-wrapper">
        <div className="in-wrapper">
          <h1>Current email: {user.email}</h1>
          <h1>Current name: {user.displayName}</h1>
          <p>email form</p>
          <p>name form</p>
          <p>password form</p>
          <p>repeat password form</p>
          <button>Submit</button>
          <button>Sign out / Logout</button>
        </div>
      </div>
    </div>
  );
}
