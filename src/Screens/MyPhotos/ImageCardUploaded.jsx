import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import UserAuthenticationHandler from "../../Handlers/UserAuthenticationHandler";

export default function ImageCardUploaded(props) {
  const [data, setData] = useState({});

  const db = firebase.firestore();
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
