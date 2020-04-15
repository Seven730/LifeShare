import React from "react";
import "./AccountStyle.css";
import NavigationBar from "../../Components/NavigationBar";

export default function Account() {
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
