import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import firebase from "firebase";
import "./Navigation.css";
import SplitText from "react-pose-text";

const charPoses = {
  hoverable: true,
  init: { scale: 1 },
  hover: {
    scale: 1.01,
    transition: {
      type: "spring",
      velocity: 12
    }
  }
};

const Navigation = props => {
  const logout = () => {
    localStorage.clear();
    firebase.auth().signOut();
    props.history.push("/login");
    indexedDB.deleteDatabase("firebaseLocalStorageDb");
  };

  if (
    props.location.pathname === "/login" ||
    props.location.pathname === "/register" ||
    props.location.pathname === "/"
  ) {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <img
            src="https://i.imgur.com/hfalU7U.png"
            alt="Hacker News Logo"
            className="hnlogo"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/hackernews">
            <SplitText charPoses={charPoses}>Hacker News</SplitText>
          </Nav.Link>
          <Nav.Link as={NavLink} to="/usernews">
            <SplitText charPoses={charPoses}>User News</SplitText>
          </Nav.Link>
          <Nav.Link as={NavLink} to="/submit">
            <SplitText charPoses={charPoses}>Submit</SplitText>
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to="/login">
            <SplitText charPoses={charPoses}>Log in</SplitText>
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <img
          src="https://i.imgur.com/hfalU7U.png"
          alt="Hacker News Logo"
          className="hnlogo"
        />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/hackernews">
          <SplitText charPoses={charPoses}>Hacker News</SplitText>
        </Nav.Link>
        <Nav.Link as={NavLink} to="/usernews">
          <SplitText charPoses={charPoses}>User News</SplitText>
        </Nav.Link>
        <Nav.Link as={NavLink} to="/submit">
          <SplitText charPoses={charPoses}>Submit</SplitText>
        </Nav.Link>
      </Nav>
      <Nav className="ml-auto">
        <Nav.Link onClick={logout}>
          {" "}
          <SplitText charPoses={charPoses}>Log out</SplitText>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
