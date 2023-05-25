import React from "react";
import Header from "../../components/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

function CategoryLayout() {
  return (
    <div>
      <Header />

      <Container>
        <Row>
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

export default CategoryLayout;
