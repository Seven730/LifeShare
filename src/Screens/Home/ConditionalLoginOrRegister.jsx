import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import GoogleLoginForm from "../Login/Forms/GoogleLoginForm";

export default function ConditionalLoginOrRegister(props) {
  return !props.loggedIn ? (
    <div>
      <div>
        {" "}
        <Link to="login">
          <Button variant="primary" className="signInButton">
            Sign In
          </Button>
        </Link>{" "}
        <Link to="register">
          <Button variant="primary" className="signUpButton">
            Sign Up
          </Button>
        </Link>{" "}
      </div>
      <div>
        <GoogleLoginForm />
      </div>
    </div>
  ) : (
    <div>
      <Link to="imageGallery">
        <Button variant="primary" className="signInButton">
          Image Gallery
        </Button>
      </Link>{" "}
      <Link to="myPhotos">
        <Button variant="primary" className="signUpButton">
          My photos
        </Button>
      </Link>{" "}
    </div>
  );
}
