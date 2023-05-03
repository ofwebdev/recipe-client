import React from "react";
import Header from "../../components/Header/Header";
import { Container, Row } from "react-bootstrap";
import Blog from "../../components/Blog/Blog";

function BlogLayout() {
  return (
    <div>
      <Header></Header>

      <Container>
        <Row>
          <Blog />
        </Row>
      </Container>
    </div>
  );
}

export default BlogLayout;
