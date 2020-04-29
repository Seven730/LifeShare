import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import UserAuthenticationHandler from "../../Handlers/UserAuthenticationHandler";

export default function ImageCardUploaded(props) {

  const [data, setData] = useState({});
  const [hearts, setHearts] = useState(props.value.heartCount);

  //name = id posta, user - current user,
  const db = firebase.firestore();
  const heartsRef = db.collection("hearts");
  const increment = firebase.firestore.FieldValue.increment(1)
  const decrement = firebase.firestore.FieldValue.increment(-1)
  const heartCounterRef = db.collection("posts").doc(props.value.name);

  heartCounterRef
    .onSnapshot(function (doc) {
      setHearts(doc.data().heartCount);
    });

  const getPost = async () => {
    const docRef = db.collection("posts").doc(props.value.name);

    const post = await docRef.get();
    if (!post.exists) {
      console.log("No such data!");
      return;
    }

    const userId = post.data().userId;
    const username = props.user.displayName;
    const ref = firebase.storage().ref(`${userId}/${props.value.name}`);
    const url = await ref.getDownloadURL();

    setData({
      content: post.data().content,
      username,
      userId,
      url,
    });
  };
  useEffect(() => {
    if (!data.content) {
      getPost();
    }
  });

  const deletePhoto = async () => {
    await db.collection("posts").doc(props.value.name).delete();
    await firebase.storage().ref(`${data.userId}/${props.value.name}`).delete();
    UserAuthenticationHandler.redirectToImages();
  };

  const addHeart = () => {

    heartsRef
      .where("userId", "==", `${props.user.uid}`)
      .where("postId", "==", `${props.value.name}`)
      .get()
      .then(function (snapshot) {
        console.log(snapshot.empty)
        if (snapshot.empty === true) {
          heartIncrement();
        } else {
          heartDecrement();
        }
      })
  }


  const heartIncrement = () => {
    heartCounterRef.update({
      heartCount: increment
    }).then(() => {
      heartsRef.doc(`${props.user.uid}_${props.value.name}`).set({
        postId: props.value.name,
        userId: props.user.uid
      })
    })
  }

  const heartDecrement = () => {
    heartsRef.doc(`${props.user.uid}_${props.value.name}`).delete()
      .then(() => {
        heartCounterRef.update({
          heartCount: decrement
        });
      })

  }


  return (
    <div>
      <Card className="imageCard">
        <Card.Img className="imgCardIMG" variant="top" src={data.url} />
        <Card.Body>
          <Card.Title className="imgCardBar">
            <p className="title titleCard">{data.username}</p>
          </Card.Title>
          <Card.Text>{data.content}</Card.Text>
          <Button variant="primary" type="submit" onClick={deletePhoto}>
            Delete Image
          </Button>
          <div className="imgCardBottom">
            <input
              onClick={addHeart}
              type="image"
              src="https://image.flaticon.com/icons/svg/1216/1216649.svg"
              alt="img"
              className="heartIcon"
            />
            <p className="title titleCounter">{hearts}</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
