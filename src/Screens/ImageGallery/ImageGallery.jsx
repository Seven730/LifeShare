import React from "react";
import "./ImageGalleryStyle.css";
import NavigationBar from "../../Components/NavigationBar";
import ImageCard from "./ImageCard";

export function ImageGallery() {
  return (
    <div>
      <NavigationBar />
      <ImageCard />
    </div>
  );
}

export const path = "/imageGallery";
