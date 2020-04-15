import React from "react";
import "./HomeStyle.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Home() {
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
          {" "}
          <Link to="login">
            <Button variant="light">Sign In</Button>
          </Link>{" "}
          <Link to="register">
            <Button variant="dark">Sign Up</Button>
          </Link>{" "}
          <Button variant="info">Download the app!</Button>{" "}
          <Link to="myPhotos">link do My photos</Link>
        </div>
      </div>
      <div id="right">
        <img
          className="homeIMG"
          src="https://previews.123rf.com/images/lanak/lanak1012/lanak101200262/8477029-happy-cute-little-girl-in-the-wheat-field-on-a-warm-summer-day.jpg"
        ></img>
      </div>
    </div>
  );
}
