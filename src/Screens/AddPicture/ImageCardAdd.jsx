import React, { useCallback, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import { storage } from "../../index.jsx"
import * as firebase from "firebase/app";
import UserAuthenticationHandler from "../../Handlers/UserAuthenticationHandler";
import "firebase/firestore"


export default function ImageCardAdd() {
  const defaultImage = "Upload.png";

  const [user, setUser] = useState({});

  UserAuthenticationHandler.addListener((user) => setUser(user));

  const defaultUrl = "https://www.pngkey.com/png/full/260-2601842_upload-cad-files-sign.png"

  const reset = () => {
    setImageSource(defaultImage);
    setDescription("");
  };

  const onDrop = useCallback((acceptedFiles) => {
    const fileReader = new FileReader()
    // fileReader.onload = () => setImageSource(fileReader.result)
    fileReader.readAsDataURL(acceptedFiles[0])
    fileReader.onload = () => {
      const binaryStr = fileReader.result
      setImageSource(binaryStr)
      setFile(acceptedFiles[0])
    }

  }, []);

  const save = async () => {
    console.log(user)

    const db = firebase.firestore()
    const data = await db.collection("posts").add({
      content: description,
      heartCount: 0,
      userId: user.uid,
      whenAdded: Date.now(),
    })


    var storageRef = storage.ref();
    var fileRef = storageRef.child(data.im.path.segments[1]);

    fileRef.put(file)
      .then(snapshot => {
        console.log('Uploaded.');
      })
      .catch(error => {
        console.log(error);
      })
  }

  const [description, setDescription] = useState("")
  const [file, setFile] = useState("")
  const [imageSource, setImageSource] = useState(defaultUrl)
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })


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
              src="Upload2.png"
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
          {/* <Card.Title className="imgCardBar">
            <p className="title titleCard">your image</p>
          </Card.Title> */}
          <Form>
            {/* <Form.Label>Description</Form.Label> */}
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
