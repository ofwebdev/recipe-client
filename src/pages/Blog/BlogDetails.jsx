import { useEffect, useRef, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
// import { useReactToPrint } from "react-to-pdf";
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
          <img
            className="mb-5"
            src={info.image}
            alt=""
            style={{ borderRadius: "32px" }}
          />
          <Col md={{ span: 6, offset: 3 }}>
            {/* <div ref={componentRef}> */}
            {info.article.map((item, index) => (
              <div key={index}>
                {typeof item === "string" && <h5>{item}</h5>}
                {typeof item === "object" && (
                  <img className="w-100 my-4" src={item.img} alt="" />
                )}
              </div>
            ))}
            {/* </div> */}
          </Col>
        </Row>
      </Container>

      {/* <div className="text-center">
        <Button variant="primary" onClick={handlePrint}>
          Download as PDF
        </Button>
      </div> */}
      <Footer />
    </>
  );
}

export default BlogDetails;
