import React from "react";
import "./AddPictureStyle.css";
import NavigationBar from "../../Components/NavigationBar";
import ImageCardAdd from "./ImageCardAdd";
import { CardDeck } from "react-bootstrap";

export default function AddPicture() {
  return (
    <div>
      <NavigationBar />
      <CardDeck className="imageCardDeck">
        <ImageCardAdd />
      </CardDeck>{" "}
    </div>
  );
}
