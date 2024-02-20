import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import logo from "../../Assets/logo.png";

function Home() {
  return (
    <Container fluid className="home-section">
      <Container className="home-content">
        <Row>
          <Col md={7}>
            <h1 className="heading">
              Welcome to <span className="brand">Excellence Study</span>
            </h1>

            <p className="subheading">
              Your one-stop platform for quality learning resources and courses.
            </p>
          </Col>

          <Col md={5}>
            <img src={logo} className="logo-home" alt="Excellence Study" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
