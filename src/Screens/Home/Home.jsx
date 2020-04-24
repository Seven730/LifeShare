import React, { useState } from "react";
import "./HomeStyle.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ConditionalLoginOrRegister from "./ConditionalLoginOrRegister";
import UserAuthenticationHandler from "../../Handlers/UserAuthenticationHandler";

export function Home() {
  const [isLoggedIn, changeLoginStatus] = useState(false);

  UserAuthenticationHandler.addListener((user) => changeLoginStatus(!!user));

  return (
    <div id="homePage">
      <div className="homePageWrapper">
        <h1 className="header">LifeShare</h1>
        <center>
          <div className="description">
            <p>
              Upload beautiful pictures and share your favourite moments with
              everyone!
            </p>
          </div>
          <div>
            <ConditionalLoginOrRegister loggedIn={isLoggedIn} />
            <Button variant="info" className="homeButtons">
              Download the app!
            </Button>{" "}
          </div>
        </center>
        {/* <img
          className="homeIMG"
          src="https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          alt="home screen img"
        ></img> */}
      </div>
    </div>
  );
}
export const path = "/";
