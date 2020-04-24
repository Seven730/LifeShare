import React, { useCallback, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useDropzone } from "react-dropzone";

export default function ImageCardAdd() {
  const defaultImage = "Upload.png";

  const reset = () => {
    setImageSource(defaultImage);
    setDescription("");
  };

  const onDrop = useCallback((acceptedFiles) => {
    const fileReader = new FileReader();
    fileReader.onload = () => setImageSource(fileReader.result);
    fileReader.readAsDataURL(acceptedFiles[0]);
  }, []);

  const [description, setDescription] = useState("");
  const [imageSource, setImageSource] = useState(defaultImage);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

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
