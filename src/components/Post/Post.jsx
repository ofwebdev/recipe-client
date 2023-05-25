import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin, FaHeart } from "react-icons/fa";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

import "./Post.scss";

function Post({ recipe }) {
  const [isLoading, setIsLoading] = useState(true);

  const shareUrl = "https://recipe-client.web.app/" + recipe._id;
  const shareTitle = recipe.title;

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="col-lg-4 mb-4">
      <div
        className="card text-white card-has-bg click-col"
        style={{
          backgroundImage: `url(${recipe.chef.image})`,
        }}
      >
        <div className="card-img-overlay d-flex flex-column">
          <div className="card-body">
            <small className="card-meta mb-2">Chef Leadership</small>
            <h4 className="card-title mt-0 ">
              <Link className="text-white">
                years_of_experience : {recipe.chef.years_of_experience}
              </Link>
            </h4>

            <small>
              <i className="far fa-clock"></i> {recipe.chef.likes} Like
            </small>

            <br />

            <Link to={`/recipe/${recipe._id}`}>See More</Link>
          </div>
          <div className="card-footer">
            <div className="media" style={{ display: "flex", gap: "10px" }}>
              <img
                className="mr-3 rounded-circle"
                src={recipe.chef.image}
                alt="Generic placeholder image"
                style={{ width: "50px", height: "50px" }}
              />
              <div className="media-body">
                <h6 className="my-0 text-white d-block">{recipe.chef.name}</h6>
                <small>Chef of Bangladesh</small>
              </div>

              <br />

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
        </div>
      </div>
    </div>
  );
}

export default Post;
