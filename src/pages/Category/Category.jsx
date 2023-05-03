import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Post from "../../components/Post/Post";

function Category() {
  const { id } = useParams();
  const categoryRecipe = useLoaderData();
  console.log(id);
  return (
    <div>
      {categoryRecipe.map((recipe) => (
        <Post key={recipe._id} recipe={recipe}></Post>
      ))}
    </div>
  );
}

export default Category;
