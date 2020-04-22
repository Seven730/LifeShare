import React from "react";
import { Card } from "react-bootstrap";
import "./ImageGalleryStyle.css";

export default function ImageCard() {
  return (
    <div>
      <Card className="imageCard">
        <Card.Img
          className="imgCardIMG"
          variant="top"
          src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&w=1000&q=80"
        />
        <Card.Body>
          <Card.Title className="imgCardBar">
            <p className="title titleCard">image by ...</p>
          </Card.Title>
          <Card.Text>
            This is a description of this beautiful image. It's really a
            beautiful image. Some would say this is the most beautiful image.
            Really beautiful. Like beautiful beautiful. Not like fake beautiful.
            Proper beautiful.
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
