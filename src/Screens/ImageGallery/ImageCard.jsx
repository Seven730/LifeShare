import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "./ImageGalleryStyle.css";
import * as firebase from "firebase/app";
import "firebase/firestore";

export default function ImageCard(props) {
  const db = firebase.firestore();
  const [user, setUser] = useState("");
  const [url, setUrl] = useState("");

  const getUsername = async () => {
    const docRef = await db.collection("users").doc(props.value.userId);
    const user = await docRef.get();
    if (!user.exists) {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      return;
    }
    return user.data().username;
  };
  useEffect(() => {
    getUsername().then((username) => setUser(username));
    getPhoto().then((url) => setUrl(url));
  });

  const getPhoto = async () => {
    const ref = firebase
      .storage()
      .ref(`${props.value.userId}/${props.value.postId}`);
    return await ref.getDownloadURL();
  };

  return (
    <div>
      <Card className="imageCard">
        <Card.Img className="imgCardIMG" variant="top" src={url} />
        <Card.Body>
          <Card.Title className="imgCardBar">
            <p className="title titleCard">{user}</p>
          </Card.Title>
          <Card.Text>{props.value.content}</Card.Text>
          <div className="imgCardBottom">
            <p className="title giveItAHeart">give it a heart!</p>
            <input
              type="image"
              src="https://image.flaticon.com/icons/svg/1216/1216649.svg"
              alt="img"
              className="heartIcon"
            />
            <p className="title titleCounter">0</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
