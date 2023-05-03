import React from "react";
import Header from "../../components/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

function RecipeLayout() {
  return (
    <div>
      <Header />

      <Container>
        <Row>
          <Col md={12}>
            <Outlet />
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default RecipeLayout;
