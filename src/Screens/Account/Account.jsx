import React, { useState } from "react";
import "./AccountStyle.css";
import NavigationBar from "../../Components/NavigationBar";
import { Accordion, Button } from "react-bootstrap"
import AccordionCard from "./AccordionCard"
import UpdateForm from "./UpdateForm"
import UserAuthenticationHandler from "../../Handlers/UserAuthenticationHandler";
import UserUpdateHandler from "../../Handlers/UserUpdateHandler"
import ConditionalError from '../../Components/ConditionalError'

export default function Account() {
  const [user, setUser] = useState({});
  const [errorMessage, setError]  = useState("")
  UserAuthenticationHandler.addListener((user) => setUser(user));
  UserUpdateHandler.errorHandler = setError

  if (!user)UserAuthenticationHandler.redirectToHome()

  return (
    <div>
      <NavigationBar />
      <div className="auth-wrapper">
        <div className="in-wrapper">
          <h1>Current email: {user.email}</h1>
          <h1>Current name: {user.displayName}</h1>
          <ConditionalError errorMessage={errorMessage} />

          <Accordion>
            <AccordionCard header="Update your e-mail address" eventKey="0">
              <UpdateForm
                value=""
                placeholder="enter new e-mail address"
                submitCallback={UserUpdateHandler.changeEmail}
              />
            </AccordionCard>
            <AccordionCard header="Update your username" eventKey="1"><UpdateForm
              value=""
              placeholder="enter new username"
              submitCallback={UserUpdateHandler.changeUsername}
            /></AccordionCard>
            <AccordionCard header="Update your password" eventKey="2"><UpdateForm
              value=""
              auxValue=""
              placeholder="enter new password"
              auxPlaceholder="confirm new password"
              type="password"
              submitCallback={UserUpdateHandler.changePassword}
            /></AccordionCard>
          </Accordion>
          <Button type="secondary" onClick={UserAuthenticationHandler.signOut}>Sign out / Logout</Button>
        </div>

      </div>

    </div>
  );
}
