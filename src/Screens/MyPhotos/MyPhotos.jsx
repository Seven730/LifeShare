import React, { useState } from "react";
import "./MyPhotosStyle.css";
import NavigationBar from "../../Components/NavigationBar";
import { Link } from "react-router-dom";
import UserAuthenticationHandler from "../../Handlers/UserAuthenticationHandler";
import * as firebase from "firebase/app";
import "firebase/firestore"
import 'firebase/storage';
import ImageCardUploaded from "./ImageCardUploaded";
import { CardDeck } from "react-bootstrap";


export default function MyPhotos() {
  const [user, setUser] = useState({})
  UserAuthenticationHandler.addListener(user => setUser(user))
  if (!user) UserAuthenticationHandler.redirectToHome()


  const [urls, setUrls] = useState([])
  const elem = []
  const db = firebase.firestore()
  const storage = firebase.storage();


  const downloadPhotos = () => {
    storage.ref(`${user.uid}/`).listAll()
      .then(function (result) {
        result.items.forEach(function (imageRef) {
          elem.push(<ImageCardUploaded value={imageRef} />)
        })
        setUrls(elem);

      });
  }
  if (urls.length == 0) {
    downloadPhotos();
  }

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
        <CardDeck className="imageCardDeck">
          {urls}
        </CardDeck>
      </div>
    </div>
  );
}
