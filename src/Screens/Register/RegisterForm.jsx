import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ConditionalError from "../../Components/ConditionalError";
import UserAuthenticationHandler from "../../Handlers/UserAuthenticationHandler";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleError = (...args) => {
    setErrorMessage(...args);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = UserAuthenticationHandler.validateRegistration({
      password,
      passwordRepeat,
    });
    if (result.error) {
      handleError(result.message);
      return;
    }

    UserAuthenticationHandler.register(
      {
        email,
        password,
        username,
      },
      handleError
    );
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setErrorMessage("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setErrorMessage("");
  };

  const handlePasswordRepeatChange = (event) => {
    setPasswordRepeat(event.target.value);
    setErrorMessage("");
  };

  const handlerUsernameChange = (event) => {
    setUsername(event.target.value);
    setErrorMessage("");
  };

  return (
    <div className="auth-wrapper">
      <div className="in-wrapper">
        <Form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <Form.Group controlId="formUsername">
            <Form.Control
              value={username}
              onChange={handlerUsernameChange}
              type="username"
              placeholder="Enter your username"
            />
          </Form.Group>

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

          <Form.Group controlId="formPasswordRepeat">
            <Form.Control
              value={passwordRepeat}
              onChange={handlePasswordRepeatChange}
              type="password"
              placeholder="Repeat your password"
            />
          </Form.Group>
          <Button className={"btn btn-primary btn-block"} type="submit">
            Submit
          </Button>
          <p className="forgot-password text-right">
            Already registered? <a href="#">sign in</a>
          </p>
          <ConditionalError errorMessage={errorMessage} />
        </Form>
      </div>
    </div>
  );
}
