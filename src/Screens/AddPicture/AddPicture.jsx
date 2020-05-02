import React, { useState } from "react";
import "./AddPictureStyle.css";
import NavigationBar from "../../Components/NavigationBar";
import ImageCardAdd from "./ImageCardAdd";
import { CardDeck } from "react-bootstrap";
import UserAuthenticationHandler from "../../Handlers/UserAuthenticationHandler";
import RedirectHandler from "../../Handlers/RedirectHandler";

export default function AddPicture() {
  const [user, setUser] = useState({});
  UserAuthenticationHandler.addListener((user) => setUser(user));
  if (!user) RedirectHandler.redirectToHome();

  return (
    <div>
      <NavigationBar />
      <CardDeck className="imageCardDeck">
        <ImageCardAdd />
      </CardDeck>{" "}
    </div>
  );
}
