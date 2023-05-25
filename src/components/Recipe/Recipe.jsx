import { Link, useLoaderData, useParams } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import LazyLoad from "react-lazy-load";

function Recipe() {
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
    <Container className="mt-5">
      <Row>
        <Col sm={{ span: 6, offset: 3 }}>
          <div className="card mb-5">
            <LazyLoad>
              <img
                src={info.chef.image}
                className="card-img-top"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </LazyLoad>
            <div className="card-body">
              <h5 className="card-title">{info.chef.name}</h5>
              <p className="card-text">
                Years of experience: {info.chef.years_of_experience}
              </p>
              <p className="card-text">
                Number of recipes: {info.chef.number_of_recipes}
              </p>
              <p className="card-text">Likes: {info.chef.likes}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <h1 className="text-center my-3">Chef Recipe</h1>
        {info.recipes.map((data, index) => (
          <Col md={4} key={index}>
            <div className="bg-light p-3 mb-4 border-4 shadow rounded">
              <LazyLoad>
                <img src={data.image} style={{ width: "100%" }} />
              </LazyLoad>
              <h4>{data.name}</h4>
              <p>{data.description.substring(0, 40)}</p>

              <button className="btn btn-primary">Read more</button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Recipe;
