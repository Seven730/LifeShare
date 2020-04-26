import React, {useState} from "react";
import "./MyPhotosStyle.css";
import NavigationBar from "../../Components/NavigationBar";
import { Link } from "react-router-dom";
import UserAuthenticationHandler from "../../Handlers/UserAuthenticationHandler";

export default function MyPhotos() {
  const [user, setUser] = useState({})
  UserAuthenticationHandler.addListener(user=>setUser(user))
  if(!user)UserAuthenticationHandler.redirectToHome()
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
