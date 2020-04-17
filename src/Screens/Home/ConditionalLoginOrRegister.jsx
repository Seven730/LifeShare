import React from 'react'
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function ConditionalLoginOrRegister(props) {
  console.log(props)
    return !props.loggedIn ? (
        <div>
          {" "}
          <Link to="login">
            <Button variant="light">Sign In</Button>
          </Link>{" "}
          <Link to="register">
            <Button variant="dark">Sign Up</Button>
          </Link>{" "}
        </div>
    ) : null
}
