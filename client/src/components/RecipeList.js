import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeList({ recipes, listStyle, searchResults }) {
  return (
    <div style={listStyle}>
      {recipes.length ? (
        recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
      ) : (
        <h1>There are no recipes in this list</h1>
      )}
    </div>
  );
}

export default RecipeList;
