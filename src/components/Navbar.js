import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Logo from "./Logo";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { AiFillStar, AiOutlineHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { useAuthState } from "react-firebase-hooks/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

function NavBar() {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const [user] = useAuthState(auth);
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavColour(window.scrollY >= 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleExpand = () => setExpand(expand ? false : "expanded");

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleExpand}>
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Link as={Link} to="/" onClick={() => setExpand(false)}>
              <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
            </Nav.Link>
            {user ? (
              <><Nav.Link href="/login" rel="noreferrer">
                <MdOutlineExplore style={{ marginBottom: "2px" }} /> Explore
              </Nav.Link>
              <Nav.Link onClick={() => auth.signOut()}>
                  <IoLogOut style={{ marginBottom: "2px" }} /> Logout
                </Nav.Link></>
            ) : (
              <Nav.Link href="/login" rel="noreferrer">
                <IoLogIn style={{ marginBottom: "2px" }} /> Sign In
              </Nav.Link>
            )}
            <Nav.Link href="https://github.com/visheshraghuvanshi/excellence-study" target="_blank">
              <Button className="fork-btn-inner">
                <CgGitFork style={{ fontSize: "1.2em" }} /> <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
