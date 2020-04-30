import React, { useState } from "react";
import "./NavigationBarStyle.css";
import { Navbar, Nav, NavbarBrand } from "react-bootstrap";
import UserAuthenticationHandler from "../Handlers/UserAuthenticationHandler";
import { path as HomePath } from "../Screens/Home/Home";
import { Link } from "react-router-dom";

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
        <Navbar.Brand>
          <Link to={HomePath} className="titleNavbar">
            <header className="title titleNavbar">LifeShare</header>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="myPhotos" className="navbarLink">
                My Photos
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="imageGallery" className="navbarLink">
                Image Gallery
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="account" className="navbarLink">
                Account
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="post" className="navbarLink">
                Post a picture!
              </Link>
            </Nav.Link>
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
