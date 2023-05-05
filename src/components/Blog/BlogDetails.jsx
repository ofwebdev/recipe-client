import { useEffect, useRef, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";

import Loading from "../Loading/Loading";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function BlogDetails() {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const info = useLoaderData();
  const ref = useRef();

  const generatePdf = () => {
    // Generate canvas from the JSX
    html2canvas(ref.current).then((canvas) => {
      const imgData = canvas.toDataURL(info.image);
      const pdf = new jsPDF("p", "mm", "a4");
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save("download.pdf");
    });
  };

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
        <Row ref={ref}>
          <img
            className="mb-5"
            src={info.image}
            alt=""
            style={{ borderRadius: "32px" }}
          />
          <Col md={{ span: 6, offset: 3 }}>
            {info.article.map((item, index) => (
              <div key={index}>
                {typeof item === "string" && <h5>{item}</h5>}
                {typeof item === "object" && (
                  <img className="w-100 my-4" src={item.img} alt="" />
                )}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
      <div className="text-center mt-4">
        <Button onClick={generatePdf}>Download PDF</Button>
      </div>
      <Footer />
    </>
  );
}

export default BlogDetails;
