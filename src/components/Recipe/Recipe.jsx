import { Link, useLoaderData, useParams } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

function Recipe() {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const info = useLoaderData();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col sm={7}>
          <img src={info.recipe.image} style={{ width: "100%" }} />

          <h2 className="py-3 border-bottom">{info.recipe.name}</h2>

          <h5
            className="text-justify"
            style={{ letterSpacing: "1px", lineHeight: "2" }}
          >
            {info.recipe.instructions}
          </h5>

          {/* <Link to={`/category/${category_id}`}>
            <Button variant="danger">All news in this category</Button>
          </Link> */}
        </Col>

        <Col sm={5}>
          <div className="card">
            <img
              src={info.recipe.chef.image}
              className="card-img-top"
              //   height={200}
            />
            <div className="card-body">
              <h5 className="card-title">{info.recipe.chef.name}</h5>
              <p className="card-text">
                Years of experience: {info.recipe.chef.years_of_experience}
              </p>
              <p className="card-text">
                Number of recipes: {info.recipe.chef.number_of_recipes}
              </p>
              <p className="card-text">Likes: {info.recipe.chef.likes}</p>
            </div>
          </div>

          <div className="details p-2">
            <h6 className="mt-3">{info.recipe.description}</h6>

            <h4 className="py-3">Ingredient</h4>
            <ul>
              {info.recipe.ingredients.map((p) => (
                <li>{p}</li>
              ))}
            </ul>

            <h4>Time to cooke</h4>

            <ul>
              <li>
                <strong>Preparation time</strong> {info.recipe.prep_time}
              </li>
              <li>
                <strong>Cook time</strong> {info.recipe.cook_time}
              </li>
              <li>
                <strong>Total time</strong> {info.recipe.total_time}
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
  return <Loading />;
}

export default Recipe;
