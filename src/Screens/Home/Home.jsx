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
        <div className="in-wrapperHome">
          <center>
            <h1 className="header">LifeShare</h1>
            <div className="description">
              <p>
                Upload beautiful pictures and share your favourite moments with
                everyone!
              </p>
            </div>
            <div>
              <ConditionalLoginOrRegister loggedIn={isLoggedIn} />
              <Button variant="info" className="downloadAppButton">
                Download mobile app!
              </Button>{" "}
            </div>
          </center>
        </div>
      </div>
    </div>
  );
}

export const path = "/";
