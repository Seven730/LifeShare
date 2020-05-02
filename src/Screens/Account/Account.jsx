import React, { useState } from "react";
import "./AccountStyle.css";
import NavigationBar from "../../Components/NavigationBar";
import { Accordion, Button } from "react-bootstrap";
import AccordionCard from "./AccordionCard";
import UpdateForm from "./UpdateForm";
import UserAuthenticationHandler from "../../Handlers/UserAuthenticationHandler";
import UserUpdateHandler from "../../Handlers/UserUpdateHandler";
import ConditionalError from "../../Components/ConditionalError";
import RedirectHandler from "../../Handlers/RedirectHandler";

export function Account() {
  const [user, setUser] = useState({});
  const [errorMessage, setError] = useState("");
  UserAuthenticationHandler.addListener((user) => setUser(user));
  UserUpdateHandler.errorHandler = setError;

  if (!user) RedirectHandler.redirectToHome();

  return (
    <div>
      <NavigationBar />
      <div className="auth-wrapperAccount">
        <div className="in-wrapperAccount">
          <ConditionalError errorMessage={errorMessage} />
          <h3 className="accountTitle">Your Account</h3>
          <Accordion>
            <AccordionCard header="Update e-mail address" eventKey="0">
              <h5>Current email: {user.email}</h5>
              <UpdateForm
                value=""
                placeholder="Enter new email"
                submitCallback={UserUpdateHandler.changeEmail}
              />
            </AccordionCard>
            <AccordionCard header="Update username" eventKey="1">
              <h5>Current name: {user.displayName}</h5>
              <UpdateForm
                value=""
                placeholder="Enter new username"
                submitCallback={UserUpdateHandler.changeUsername}
              />
            </AccordionCard>
            <AccordionCard header="Update password" eventKey="2">
              <UpdateForm
                value=""
                auxValue=""
                placeholder="Enter new password"
                auxPlaceholder="Repeat new password"
                type="password"
                submitCallback={UserUpdateHandler.changePassword}
              />
            </AccordionCard>
          </Accordion>
          <Button
            className="signOutButton"
            variant="secondary"
            type="primary"
            onClick={UserAuthenticationHandler.signOut}
          >
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
}

export const path = "/account";
