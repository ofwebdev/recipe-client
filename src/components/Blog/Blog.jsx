import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Loading from "../Loading/Loading";
import Header from "../Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";

function Blog() {
  const [isLoading, setIsLoading] = useState(true);
  const blogData = useLoaderData();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <Container>
        <Row>
          {blogData.map((blog) => (
            <div className="col-md-4" key={blog.id}>
              <div className="blog-card rounded p-3 bg-light">
                <img
                  className="w-100"
                  height={200}
                  style={{ objectFit: "contain" }}
                  src={blog.image}
                  alt=""
                />
                <h4 className="mt-3">
                  <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                </h4>
                <p>{blog.article[0]}..</p>

                <div className="author-info d-flex">
                  <img
                    height={40}
                    width={40}
                    className="rounded"
                    src={blog.author.avatar}
                    alt=""
                  />

                  <div className="name-date ms-3">
                    <h6 className="mb-0">{blog.author.name}</h6>
                    <p className="mb-0">
                      {blog.author.date}{" "}
                      <strong>{blog.author.readingTime}</strong>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Blog;
