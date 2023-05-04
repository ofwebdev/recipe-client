import { Link, useLoaderData, useParams } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function BlogDetails() {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const info = useLoaderData();
  console.log(info);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <img src={info.image} alt="" />
          <Col md={6}></Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default BlogDetails;
