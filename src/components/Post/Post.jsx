import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

function Post({ recipe }) {
  const [showFullDetails, setShowFullDetails] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const shareUrl = "https://example.com/recipe/" + recipe._id;
  const shareTitle = recipe.title;

  const toggleFullDetails = () => {
    setShowFullDetails(!showFullDetails);
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Card className="mb-3">
      <div className="row g-0">
        <div className="col-md-12">
          <div className="my-3 ps-2">
            <img
              src={recipe.recipe.chef.image}
              alt={recipe.recipe.chef.name}
              className="rounded-circle"
              width={30}
              height={30}
              style={{ objectFit: "cover" }}
            />
            <span className="ms-2">{recipe.recipe.chef.name}</span>
          </div>
          <Link to={`/recipe/${recipe._id}`}>
            <Card.Img
              variant="top"
              src={recipe.recipe.image}
              style={{ width: "100%", borderRadius: 0 }}
            />
          </Link>
        </div>
        <div className="col-md-12">
          <Card.Body>
            <Card.Title>{recipe.recipe.name}</Card.Title>
            {showFullDetails ? (
              <Card.Text>{recipe.recipe.description}</Card.Text>
            ) : (
              <Card.Text style={{ marginBottom: 0 }}>
                {recipe.recipe.description.substring(0, 100)}...
              </Card.Text>
            )}
            <Button
              variant="link"
              className="btn btn-link p-0"
              onClick={toggleFullDetails}
            >
              {showFullDetails ? "See less" : "See more"}
            </Button>
          </Card.Body>
        </div>
      </div>

      <Card.Footer>
        <div className="d-flex justify-content-between my-2">
          <div>
            <small className="text-muted">
              {recipe.recipe.chef.likes} Likes
            </small>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            {/* Facebook share button */}
            <FacebookShareButton url={shareUrl} quote={shareTitle}>
              <FaFacebook size={24} />
            </FacebookShareButton>

            {/* Twitter share button */}
            <TwitterShareButton url={shareUrl} title={shareTitle}>
              <FaTwitter size={24} />
            </TwitterShareButton>

            {/* LinkedIn share button */}
            <LinkedinShareButton url={shareUrl} title={shareTitle}>
              <FaLinkedin size={24} />
            </LinkedinShareButton>
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default Post;
