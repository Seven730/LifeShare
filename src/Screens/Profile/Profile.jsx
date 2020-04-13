import React from "react";
import "./Profile.css";
import { Navbar, Nav } from "react-bootstrap";

export default function profile() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="home">LifeShare</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="profile">Profile</Nav.Link>
          <Nav.Link href="pictures">Pictures</Nav.Link>
        </Nav>
        <h5 className="name">accountname</h5>
      </Navbar>
    </div>
  );
}
