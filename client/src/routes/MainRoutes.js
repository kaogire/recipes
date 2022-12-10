import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import axios from "axios";

// layout
import MainLayout from "../layouts/Main/Index";

// pages
import Home from "../pages/Home";
import Products from "../pages/Products";
import Recipe from "../pages/Recipes";
import Tutorials from "../pages/Tutorials";
import About from "../pages/About";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Error from "../pages/Error";
import SingleRecipe from "../pages/SingleRecipe";
import AddRecipe from "../pages/AddRecipe";
import Procedure from "../pages/Procedure";
import Dash from "../pages/Dash";
import EditProfile from "../pages/EditProfile";


// routes
import ProtectedRoute from "./ProtectedRoute";

// our api
// const api = "http://127.0.0.1:3000/recipes";

// const api2 = "http://127.0.0.1:3000/user";

const MainRoutes = () => {
  // const [recipes, setRecipes] = useState([]);
  const [user, setUser] = useState(null);

  // call loadRecipes function
  useEffect(() => {
    loadRecipes();
  }, []);

  // fetch recipes from api
  const loadRecipes = async () => {
    // const response = await axios.get("/recipes");
    // setRecipes(response.data);
  };

  // useEffect(() => {
  //   fetch("/user").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => {
  //         setUser(user);
  //       });
  //     }
  //   });
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="recipes" element={<Recipe />} />
          <Route path="recipes/:recipeId" element={<SingleRecipe />} />
          <Route path="tutorials" element={<Tutorials />} />
          <Route path="about" element={<About />} />
          <Route path="signup" element={<Signup />} />
          <Route path="profile" element={<EditProfile />} />
          <Route path="login" element={<Login setUser={setUser} />} />

          <Route
            path="dashboard"
            element={
              // <ProtectedRoute user={user}>
              <Dash user={user} />
              // {/* </ProtectedRoute> */}
            }
          />
          <Route
            path="addrecipe"
            element={<AddRecipe loadRecipes={loadRecipes} />}
          />
          <Route path="procedure" element={<Procedure />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
