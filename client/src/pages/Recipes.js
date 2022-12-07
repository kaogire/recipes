import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RecipeList from "../components/RecipeList";

function Recipes() {
  return (
    <div>
      <Header />
      <RecipeList />
      <Footer />
    </div>
  );
}

export default Recipes;
