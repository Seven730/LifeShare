import React from "react";
import { Button } from "react-bootstrap";
import UserAuthenticationHandler from "../../../Handlers/UserAuthenticationHandler";
import Providers from "../../../Model/Providers";

export default function GoogleLoginForm() {
  const login = () => {
    UserAuthenticationHandler.signInWithProvider(Providers.google);
  };

  return (
    <Button className="homeButtons" onClick={login}>
      Sign in with Google
    </Button>
  );
}
