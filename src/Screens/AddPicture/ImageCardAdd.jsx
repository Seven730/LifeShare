import React, { useCallback, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import { storage } from "../../index.jsx";
import * as firebase from "firebase/app";
import UserAuthenticationHandler from "../../Handlers/UserAuthenticationHandler";
import RedirectHandler from "../../Handlers/RedirectHandler";
import "firebase/firestore";

export default function ImageCardAdd() {
  UserAuthenticationHandler.addListener((user) => setUser(user));

  const defaultImage = require("./Upload.png");

  const reset = () => {
    setImageSource(defaultImage);
    setDescription("");
  };

  const onDrop = useCallback((acceptedFiles) => {
    const fileReader = new FileReader();
    try {
      fileReader.readAsDataURL(acceptedFiles[0]);
    } catch (e) {
      console.error(e);
      return;
    }
    fileReader.onload = () => {
      const binaryStr = fileReader.result;
      setImageSource(binaryStr);
      setFile(acceptedFiles[0]);
    };
  }, []);

  const save = async (event) => {
    event.preventDefault();
    if (imageSource === "./Upload.png") {
    } else {
      const db = firebase.firestore();
      const data = await db.collection("posts").add({
        content: description,
        heartCount: 0,
        userId: user.uid,
        whenAdded: Date.now(),
        postId: "",
      });

      var storageRef = storage.ref();
      storageRef.child(user.uid);
      var fileRef = storageRef.child(`${user.uid}/${data.im.path.segments[1]}`);
      db.collection("posts").doc(`${data.im.path.segments[1]}`).update({
        postId: data.im.path.segments[1],
      });

      fileRef
        .put(file)
        .then((snapshot) => {
          RedirectHandler.redirectToMyGallery();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [imageSource, setImageSource] = useState(defaultImage);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });
  const [user, setUser] = useState({});

  return (
    <div>
      <Card className="imageCard">
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <Card.Img
              className="imgCardIMG"
              id="img"
              variant="top"
              src={require("./Upload2.png")}
            />
          ) : (
            <Card.Img
              className="imgCardIMG"
              id="img"
              variant="top"
              src={imageSource}
            />
          )}
        </div>

        <Card.Body>
          <Form>
            <Form.Control
              as="textarea"
              rows="2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="description"
              placeholder="Type in your description.."
            />

            <br></br>
            <Button
              variant="primary"
              type="submit"
              className="addPictureButton"
              onClick={save}
            >
              Add picture
            </Button>

            <Button variant="secondary" type="reset" onClick={reset}>
              Cancel
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
