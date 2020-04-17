import React, { useState } from "react";
import "./HomeStyle.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ConditionalLoginOrRegister from "./ConditionalLoginOrRegister";
import UserAuthenticationHandler from '../../Handlers/UserAuthenticationHandler'

export function Home() {
  const [isLoggedIn, changeLoginStatus] = useState(false)

  UserAuthenticationHandler.addListener(user => changeLoginStatus(!!user))

  return (
    <div className="grid">
      <div id="left">
        <h1 className="header">LifeShare</h1>
        <div className="description">
          <p>
            Upload beautiful pictures and share your favourite moments with
            everyone!
          </p>
        </div>
        <div>
          <ConditionalLoginOrRegister loggedIn={isLoggedIn}/>
          <Button variant="info">Download the app!</Button>{" "}
          <Link to="myPhotos">link do My photos</Link>
        </div>
      </div>
      <div id="right">
        <img
          className="homeIMG"
          src="https://previews.123rf.com/images/lanak/lanak1012/lanak101200262/8477029-happy-cute-little-girl-in-the-wheat-field-on-a-warm-summer-day.jpg"
          alt="home screen"
        ></img>
      </div>
    </div>
  );
}
export const path = "/"