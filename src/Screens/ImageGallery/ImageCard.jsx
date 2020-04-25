import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "./ImageGalleryStyle.css";
import * as firebase from "firebase/app";
import "firebase/firestore"



export default function ImageCard(props) {
  console.log(props.value.userId)
  const db = firebase.firestore()
  const getUsername = () => {
    const docRef = db.collection("users").doc(props.value.userId)
    docRef.get().then(function (doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }

      setUser(doc.data())
      return doc.data()
    })
  }
  getUsername();


  const [user, setUser] = useState("")
  const [url, setUrl] = useState("")

  const getPhoto = () => {
    const ref = firebase.storage().ref(`${props.value.userId}/${props.value.postId}`);
    const url = ref.getDownloadURL()
      .then((url) => {
        setUrl(url)
        return url
      })
  }
  getPhoto();

  // console.log(props.value.content)

  return (
    <div>
      <Card className="imageCard">
        <Card.Img
          className="imgCardIMG"
          variant="top"
          // src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&w=1000&q=80"
          src={url}
        />
        <Card.Body>
          <Card.Title className="imgCardBar">
            <p className="title titleCard">{user}</p>
          </Card.Title>
          <Card.Text>
            {props.value.content}
          </Card.Text>
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
