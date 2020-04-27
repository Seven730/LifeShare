import React, { useState } from "react";
import "./ImageGalleryStyle.css";
import NavigationBar from "../../Components/NavigationBar";
import ImageCard from "./ImageCard";

import * as firebase from "firebase/app";
import "firebase/firestore"
import { CardDeck } from "react-bootstrap";


export function ImageGallery() {

  const db = firebase.firestore()

  const getMarker = async () => {
    const snapshot = await db.collection('posts').get()

    return snapshot.docs.map(doc => doc.data());
  }

  const [elements, setElements] = useState([])
  const elem = []
  const downloadPhotos = async () => {
    var photos = await getMarker();
    for (let photo of photos) {

      elem.push(<ImageCard value={photo} />);
    }
    setElements(elem)
  }
  if (!elements.length) {
    downloadPhotos();
  }
  return (
    <div>
      <NavigationBar />
      <CardDeck className="imageCardDeck">
        {elements}
      </CardDeck>
    </div>
  );
}

export const path = "/imageGallery";
