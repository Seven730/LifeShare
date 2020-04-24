import React from "react";
import "./MyPhotosStyle.css";
import NavigationBar from "../../Components/NavigationBar";
import ImageCardUploaded from "./ImageCardUploaded";
import { Link } from "react-router-dom";

export default function MyPhotos() {
  return (
    <div>
      <NavigationBar />
      <div>
        <h1 className="info">No images yet? Upload your first picture!</h1>
        <h1 className="info2">
          <Link className="info2" to="post">
            Click me :)
          </Link>
        </h1>
        {/* or */}
        {/* <ImageCardUploaded /> */}
      </div>
    </div>
  );
}
