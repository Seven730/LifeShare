import React, { useState } from "react";
import "./HomeStyle.css";
import { Button } from "react-bootstrap";
import ConditionalLoginOrRegister from "./ConditionalLoginOrRegister";
import UserAuthenticationHandler from "../../Handlers/UserAuthenticationHandler";

export function Home() {
  const [isLoggedIn, changeLoginStatus] = useState(false);
  const [prompt, setPrompt] = useState(false);
  UserAuthenticationHandler.addListener((user) => changeLoginStatus(!!user));

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    setPrompt(e);
  });

  const addToHomeScreen = (e) => {
    prompt.prompt();
    prompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      setPrompt(false);
    });
  };

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
              {prompt ? (
                <Button
                  variant="info"
                  className="downloadAppButton"
                  onClick={addToHomeScreen}
                >
                  Download mobile app!
                </Button>
              ) : null}
            </div>
          </center>
        </div>
      </div>
    </div>
  );
}

export const path = "/";
