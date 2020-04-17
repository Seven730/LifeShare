import React, { useState } from "react";
import "./AccountStyle.css";
import NavigationBar from "../../Components/NavigationBar";
import UserAuthenticationHandler from '../../Handlers/UserAuthenticationHandler'

export default function Account() {

  const [user, setUser] = useState({})

  UserAuthenticationHandler.addListener(user => setUser(user))

  return (
    <div>
      <NavigationBar />
      <div>
        <h1>
          Account - change email or password, also there could be an avatar and
          log out button
        </h1>
        <h1>email:{user.email}</h1>
        <h1>name:{user.displayName}</h1>
      </div>
    </div>
  );
}
