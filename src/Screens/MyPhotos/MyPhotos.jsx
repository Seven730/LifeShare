import React from "react";
import "./MyPhotosStyle.css";
import NavigationBar from "../../Components/NavigationBar";
import ImageCardUploaded from "./ImageCardUploaded";

export default function MyPhotos() {
  return (
    <div>
      <NavigationBar />
      <div>
        <h1 className="info">No images yet? Upload your first picture!</h1>
        {/* or */}
        {/* <ImageCardUploaded /> */}
      </div>
    </div>
  );
}
