import React from "react";
import { NavLink } from "react-router-dom";

const navLinks = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "14%",
  borderRadius: "5px",
  border: "1px solid white",
  color: "white",
  backgroundColor: "transparent",
  fontSize: "20px",
  fontWeight: "bold",
  alignContent: "left",
  cursor: "pointer",
  active: {
    backgroundColor: "rgba(94, 151, 255, 0.4)",
  },
};

const navbar = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const space = {
  margin: "8px 0px",
  padding: "12px",
  backgroundColor: "rgba(94, 151, 255, 0.4)",
};

function Navbar() {
  return (
    <div>
      <nav style={navbar}>
        <NavLink to="/" style={navLinks}>
          Home
        </NavLink>
        <NavLink to="/breakfast" style={navLinks}>
          Breakfast
        </NavLink>
        <NavLink to="/lunch" style={navLinks}>
          Lunch
        </NavLink>
        <NavLink to="/dinner" style={navLinks}>
          Dinner
        </NavLink>
        <NavLink to="/desert" style={navLinks}>
          Desert
        </NavLink>
      </nav>
      <div style={space}></div>
    </div>
  );
}

export default Navbar;
