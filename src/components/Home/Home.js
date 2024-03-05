import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';

const Home = () => {
  return (
    <Container fluid className="mt-5">
      <Container className="home-content">
        <Row className="align-items-center">
          <Col md={7}>
            <h1 className="heading">
              Welcome to <span className="brand">Excellence Study</span>
            </h1>
            <p className="subheading">
              Unlock your learning potential with our comprehensive online platform.
            </p>
            <p className="description">
              Explore a vast collection of articles, courses, and videos crafted by industry experts. Enhance your skills, broaden your knowledge, and achieve academic excellence with our user-friendly platform.
            </p>
            <Link to="/login">
              <Button variant="primary" className="get-started-btn">
                Get Started
              </Button>
            </Link>
          </Col>
          <Col md={5}>
            <img src={logo} className="logo-home" alt="Excellence Study" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Home;