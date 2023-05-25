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
  const [showButton, setShowButton] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteItem, setFavoriteItem] = useState(null);

  const shareUrl = "https://recipe-client.web.app/" + recipe._id;
  const shareTitle = recipe.title;

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setIsLoading(false);
    const storedItems = localStorage.getItem("favoriteItems");
    if (storedItems) {
      const favorites = JSON.parse(storedItems);
      const isRecipeFavorited = favorites.hasOwnProperty(recipe._id);
      setIsFavorite(isRecipeFavorited);
      if (isRecipeFavorited) {
        setFavoriteItem(favorites[recipe._id]);
      }
    }
  }, []);

  const handleClick = () => {
    if (isFavorite) {
      const storedItems = localStorage.getItem("favoriteItems");
      if (storedItems) {
        const updatedItems = { ...JSON.parse(storedItems) };
        delete updatedItems[recipe._id];
        localStorage.setItem("favoriteItems", JSON.stringify(updatedItems));
        setFavoriteItem(null);
      }
      setIsFavorite(false);
    } else {
      const storedItems = localStorage.getItem("favoriteItems");
      const items = storedItems ? JSON.parse(storedItems) : {};
      const updatedItems = { ...items, [recipe._id]: recipe };
      localStorage.setItem("favoriteItems", JSON.stringify(updatedItems));
      setIsFavorite(true);
      setFavoriteItem(recipe);
    }
  };

  console.log(favoriteItem);

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
        <div
          className="card-img-overlay d-flex flex-column"
          onMouseEnter={() => setShowButton(true)}
          onMouseLeave={() => setShowButton(false)}
        >
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

            {showButton && (
              <div
                className="add-to-fav"
                style={{ textAlign: "right", display: "block" }}
              >
                <FaHeart
                  size={24}
                  style={{ color: favoriteItem ? "red" : "white" }}
                />
                {favoriteItem && <p>{recipe.chef.name} is a favorite item</p>}
                <button
                  onClick={handleClick}
                  className="btn btn-primary animated-button"
                >
                  {isFavorite ? "Remove Favorite" : "Add Favorite"}
                </button>
              </div>
            )}
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
