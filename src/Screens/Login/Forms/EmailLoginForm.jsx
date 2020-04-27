import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ConditionalError from "../../../Components/ConditionalError";
import UserAuthenticationHandler from "../../../Handlers/UserAuthenticationHandler";

export default function EmailLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleError = (...args) => setErrorMessage(...args);

  const handleSubmit = (event) => {
    event.preventDefault();
    UserAuthenticationHandler.signInWithPassword(
      { email, password },
      handleError
    );
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Form className="loginForm" onSubmit={handleSubmit}>
      <Form.Group controlId="formEmail">
        <Form.Control
          value={email}
          onChange={handleEmailChange}
          type="email"
          placeholder="Enter your email"
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Control
          value={password}
          onChange={handlePasswordChange}
          type="password"
          placeholder="Enter your password"
        />
      </Form.Group>
      <Button
        className={"btn btn-primary btn-block"}
        variant="primary"
        type="submit"
      >
        Submit
      </Button>
      <ConditionalError errorMessage={errorMessage} />
    </Form>
  );
}
