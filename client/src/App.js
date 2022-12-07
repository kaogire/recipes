import React from "react";
import { Route, Switch } from "react-router-dom";
import "./components/assets/App.css";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Recipes from "./pages/Recipes";
import RecipeCardDetails from "./pages/RecipeCardDetails";
import HolidayMenus from "./pages/HolidayMenus";
import Articles from "./pages/Articles";



function App() {

  return (
    <div>
      <Switch>
        <Route exact path="/recipes">
          <Recipes />
        </Route>
        <Route exact path="/holiday_menus">
          <HolidayMenus />
        </Route>
        <Route exact path="/articles">
          <Articles />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/:recipe_id">
          <RecipeCardDetails />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
