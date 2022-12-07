import React from "react";
import { Link } from "react-router-dom";

const buttonPosition = {
  display: "flex",
  justifyContent: "flex-end",
};

const logo = {
  fontSize: "70px",
  fontWeight: "bold",
  fontFamily: "Satisfy, cursive",
  marginTop: "10px",
  marginBottom: "0px",
  marginLeft: "10px",
  paddingTop: "5px",
  textAlign: "center",
};

const buttonStyle = {
  backgroundColor: "transparent",
  border: "1px solid white",
  color: "white",
  fontSize: "20px",
  cursor: "pointer",
  outline: "none",
  padding: "4px 20px",
  margin: "10px",
  borderRadius: "8px",
alignContent: "right",
};

function Logo() {
  return (
    <div>
      <div style={buttonPosition}>
        <button style={buttonStyle}>
          <Link to="/login">Login</Link>
        </button>
        <button style={buttonStyle}>
          <Link to="/signup">Sign Up</Link>
        </button>
      </div>
      <h1 style={logo}>Table for 2 Recipes</h1>
    </div>
  );
}

export default Logo;
