import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "./ImageGalleryStyle.css";
import * as firebase from "firebase/app";
import "firebase/firestore";
import UserAuthenticationHandler from "../../Handlers/UserAuthenticationHandler";

export default function ImageCard(props) {
  UserAuthenticationHandler.addListener((currentUser) =>
    setCurrentUser(currentUser)
  );

  const db = firebase.firestore();
  const heartsRef = db.collection("hearts");
  const increment = firebase.firestore.FieldValue.increment(1);
  const decrement = firebase.firestore.FieldValue.increment(-1);
  const heartCounterRef = db.collection("posts").doc(props.value.postId);
  heartCounterRef.onSnapshot(function (doc) {
    setHearts(doc.data().heartCount);
  });

  const [user, setUser] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [url, setUrl] = useState("");
  const [hearts, setHearts] = useState(props.value.heartCount);

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

  const addHeart = () => {
    heartsRef
      .where("userId", "==", `${currentUser.uid}`)
      .where("postId", "==", `${props.value.postId}`)
      .get()
      .then(function (snapshot) {
        console.log(snapshot.empty);
        if (snapshot.empty === true) {
          heartIncrement();
        } else {
          heartDecrement();
        }
      });
  };

  const heartIncrement = () => {
    heartCounterRef
      .update({
        heartCount: increment,
      })
      .then(() => {
        heartsRef.doc(`${currentUser.uid}_${props.value.postId}`).set({
          postId: props.value.postId,
          userId: currentUser.uid,
        });
      });
  };

  const heartDecrement = () => {
    heartsRef
      .doc(`${currentUser.uid}_${props.value.postId}`)
      .delete()
      .then(() => {
        heartCounterRef.update({
          heartCount: decrement,
        });
      });
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
              src={require("./heart.png")}
              alt="h"
              className="heartIcon"
              onClick={addHeart}
            />
            <p className="title titleCounter">{hearts}</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
