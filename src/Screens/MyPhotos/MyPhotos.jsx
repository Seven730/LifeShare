import React from "react";
import "./MyPhotos.css";
import NavigationBar from "../../Components/NavigationBar";

export default function myPhotos() {
  return (
    <div>
      <NavigationBar />
      <div>
        <h1>
          My Photos - if you have no images, there is an information like
          "Upload your first picture!" else it shows your pictures in cards or
          smth
        </h1>
      </div>
    </div>
  );
}
