
import React from "react"
import { Link } from 'react-router-dom'
// import spices3 from "../images/spices3.jpg"



function Header({ handleAddRecipeShow }) {
  return (
    <div className="header">
      <div className="header-text">
        <div className="text">
          <h1>The Finest Flavours Explored</h1>
          <div className="buttons">
            <button className="btn-get">Get recipe</button>
            <Link to="addrecipe">
              <button className="btn-add">
                Add recipe
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
