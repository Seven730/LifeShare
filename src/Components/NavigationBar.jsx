import React, { useState } from "react";
import "./NavigationBarStyle.css";
import { Navbar, Nav } from "react-bootstrap";
import UserAuthenticationHandler from "../Handlers/UserAuthenticationHandler";

export default function NavigationBar() {
  const [email, setEmail] = useState("");

  UserAuthenticationHandler.addListener((user) =>
    user ? setEmail(user.displayName) : null
  );

  return (
    <div>
      <Navbar
        className="navigationBar"
        bg="dark"
        variant="dark"
        expand="lg"
        fixed="top"
      >
        <Navbar.Brand href="home">
          <header className="title">LifeShare</header>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="myPhotos">My photos</Nav.Link>
            <Nav.Link href="imageGallery">Image Gallery</Nav.Link>
            <Nav.Link href="account">Account</Nav.Link>
            <Nav.Link href="post">Post a picture!</Nav.Link>
            {/* <Nav.Dropdown></Nav.Dropdown> */}
          </Nav>
        </Navbar.Collapse>
        <h5 className="name">{email}</h5>
        {/* <h5 className="signOut" onClick={UserAuthenticationHandler.signOut}>
          Sign Out
        </h5> */}
      </Navbar>
    </div>
  );
}
