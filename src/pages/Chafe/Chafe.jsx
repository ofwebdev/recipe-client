import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Post from "../../components/Post/Post";

function Chafe() {
  // const { id } = useParams();
  const categoryRecipe = useLoaderData();

  return (
    <>
      {categoryRecipe.map((recipe) => (
        <Post key={recipe._id} recipe={recipe}></Post>
      ))}
    </>
  );
}

export default Chafe;
