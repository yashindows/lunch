import React from "react";

function RecipePage() {
  const recipeId = window.location.pathname.split("/recipes/")[1];

  return <div>{recipeId} page</div>;
}

export default RecipePage;
