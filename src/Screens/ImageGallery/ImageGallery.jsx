import React from "react";
import "./ImageGalleryStyle.css";
import NavigationBar from "../../Components/NavigationBar";

export default function ImageGallery() {
  return (
    <div>
      <NavigationBar />
      <div>
        <h1>
          ImageGallery - pictures that every user uploaded, possibly in random
          order. One card contains picture, button to "heart" it, number of
          likes, user name and user provided description
        </h1>
      </div>
    </div>
  );
}
