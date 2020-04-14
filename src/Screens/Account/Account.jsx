import React from "react";
import "./Account.css";
import NavigationBar from "../../Components/NavigationBar";

export default function account() {
  return (
    <div>
      <NavigationBar />
      <div>
        <h1>
          Account - change email or password, also there could be an avatar and
          log out button
        </h1>
      </div>
    </div>
  );
}
