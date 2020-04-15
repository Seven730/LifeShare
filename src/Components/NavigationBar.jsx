import React from "react";
import "./NavigationBarStyle.css";
import { Navbar, Nav } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="home">
          <header className="title">LifeShare</header>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="myPhotos">My photos</Nav.Link>
          <Nav.Link href="imageGallery">Image Gallery</Nav.Link>
          <Nav.Link href="account">Account</Nav.Link>
          <Nav.Link href="post">Post a picture!</Nav.Link>
        </Nav>
        <h5 className="name">accountname</h5>
      </Navbar>
    </div>
  );
}
