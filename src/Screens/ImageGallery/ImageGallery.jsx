import React from "react";
import "./ImageGalleryStyle.css";
import NavigationBar from "../../Components/NavigationBar";
import ImageCard from "./ImageCard";
import { CardDeck } from "react-bootstrap";

export function ImageGallery() {
  return (
    <div>
      <NavigationBar />
      <CardDeck className="imageCardDeck">
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </CardDeck>
    </div>
  );
}

export const path = "/imageGallery";
