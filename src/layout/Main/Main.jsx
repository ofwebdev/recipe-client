import React from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Slick from "../../components/Slider/Slick";
import Footer from "../../components/Footer/Footer";
import NewsletterSignUp from "../../components/NewsLater/NewsletterSignUp/NewsletterSignUp";

function Main() {
  return (
    <div>
      <Header />

      <Container>
        <Row>
          <Col lg={12}>
            <Slick />
          </Col>

          <Outlet />

          <Col lg={12}>
            <NewsletterSignUp />
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default Main;
