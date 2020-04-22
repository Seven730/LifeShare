import React, { useCallback } from "react";
import { Card } from "react-bootstrap";
import { useDropzone } from "react-dropzone";

export default function ImageCardAdd() {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <Card className="imageCard">
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>
              <Card.Img
                className="imgCardIMG"
                variant="top"
                src="https://www.pngkey.com/png/full/260-2601842_upload-cad-files-sign.png"
              />
            </p>
          ) : (
            <p>
              <Card.Img
                className="imgCardIMG"
                variant="top"
                src="https://www.pngkey.com/png/full/260-2601842_upload-cad-files-sign.png"
              />
            </p>
          )}
        </div>

        <Card.Body>
          <Card.Title className="imgCardBar">
            <p className="title titleCard">your image</p>
          </Card.Title>
          <Card.Text>
            Description form - Write something about your picture!
          </Card.Text>
          <div>
            <button>Submit</button>
            <button>Clear / Cancel</button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
