import React from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import LeftSidebar from "../../components/Sidebar/LeftSidebar";
import Slick from "../../components/Slider/Slick";
import Footer from "../../components/Footer/Footer";

function Main() {
  return (
    <div>
      <Header />

      <Container>
        <Row>
          <Col lg={12}>
            <Slick />
          </Col>
          <Col lg={3}>
            <LeftSidebar />
          </Col>

          <Col lg={6}>
            <Outlet />
          </Col>

          <Col lg={3}></Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default Main;
