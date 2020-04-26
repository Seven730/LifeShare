import React, { useState } from "react";
import { Card } from "react-bootstrap";
import * as firebase from "firebase/app";
import "firebase/firestore"
// import "./ImageGalleryStyle.css";
import "firebase/storage"


export default function ImageCardUploaded(props) {


  const [content, setContent] = useState("")
  const [userId, setUserId] = useState("")
  const [username, setUsername] = useState("")
  const [url, setUrl] = useState("")

  const db = firebase.firestore()
  const getPost = () => {
    const docRef = db.collection("posts").doc(props.value.name)
    docRef.get().then(function (doc) {
      if (doc.exists) {
      } else {
        console.log("No such data!");
      }
      setContent(doc.data().content)
      setUserId(doc.data().userId)

      const docRe = db.collection("users").doc(doc.data().userId)
      docRe.get().then(function (name) {
        setUsername(name.data().username)

        const ref = firebase.storage().ref(`${doc.data().userId}/${props.value.name}`);
        ref.getDownloadURL()
          .then((url) => {
            setUrl(url)
            return url
          })

      })
    })
  }
  getPost();

  const deletePhoto = () => {
    db.collection("posts").doc(props.value.name).delete()
    firebase.storage().ref(`${userId}/${props.value.name}`).delete()
    //przeładuj strone asia :)
  };


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
            <p className="title titleCard"> {username}</p>
          </Card.Title>
          <Card.Text>
            {content}}
          </Card.Text>
          <div className="imgCardBottom">
            <button onClick={deletePhoto}>Delete Image</button>
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
