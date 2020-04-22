import React, { useState } from "react";
import "./NavigationBarStyle.css";
import { Navbar, Nav } from "react-bootstrap";
import UserAuthenticationHandler from "../Handlers/UserAuthenticationHandler";

export default function NavigationBar() {
  const [user, setUser] = useState({});

  UserAuthenticationHandler.addListener((user) => setUser(user));

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
        <h5 className="name">{user.email}</h5>
        <h5 className="signOut" onClick={UserAuthenticationHandler.signOut}>
          Sign Out
        </h5>
      </Navbar>
    </div>
  );
}
