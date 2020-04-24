import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import GoogleLoginForm from "../Login/Forms/GoogleLoginForm";

export default function ConditionalLoginOrRegister(props) {
  console.log(props);
  return !props.loggedIn ? (
    <div>
      {" "}
      <Link to="login">
        <Button variant="light" className="homeButtons">
          Sign In
        </Button>
      </Link>{" "}
      <GoogleLoginForm />
      <Link to="register">
        <Button variant="dark" className="homeButtons">
          Sign Up
        </Button>
      </Link>{" "}
    </div>
  ) : (
    <div>
      <Link to="imageGallery">
        <Button variant="light" className="homeButtons">
          Image Gallery
        </Button>
      </Link>{" "}
      <Link to="myPhotos">
        <Button variant="light" className="homeButtons">
          My photos
        </Button>
      </Link>{" "}
    </div>
  );
}
