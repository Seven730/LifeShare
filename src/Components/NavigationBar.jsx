import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="home">LifeShare</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="myPhotos">My Photos</Nav.Link>
          <Nav.Link href="imageGallery">Image Gallery</Nav.Link>
          <Nav.Link href="account">Account</Nav.Link>
          <Nav.Link href="post" style={{ color: "gold" }}>
            Post a picture!
          </Nav.Link>
        </Nav>
        <h5 className="name">accountname</h5>
      </Navbar>
    </div>
  );
}
