import React, { useCallback, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

// pages
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { useUser } from "../context/auth";

const navLogo = {
  textDecoration: "none",
};

const NavBar = () => {
  // modal states
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { logout, user } = useUser();

  // register open & close modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // login open & close modal
  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);

  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    navigate("/");
    logout();
  }, [logout, navigate]);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        className="my-2 d-flex"
      >
        <Link to="/" title="Welcome to Table for 2 Recipes" style={navLogo}>
          <div className="logo">
            <h1>
              {" "}
              Table for 2 <br />
              Recipes
            </h1>
          </div>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="nav__link">
            <NavLink className="nav__link" to="/recipes">
              <span className="link__title">Recipes</span>
            </NavLink>
            <NavLink className="nav__link" to="/products">
              <span className="link__title">Products</span>
            </NavLink>
            <NavLink className="nav__link" to="/tutorials">
              <span className="link__title">Tutorials</span>
            </NavLink>
            <NavLink className="nav__link" to="/about">
              <span className="link__title">About Us</span>
            </NavLink>

            {!user?.id ? (
              <>
                <button
                  className="nav__link nav__linkRegister"
                  onClick={handleShow}
                >
                    Sign Up
                </button>
              </>
            ) : (
              <>
                <button className="nav__link nav__linkRegister" onClick={handleLogout}>
                    Logout
                </button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* signup Modal */}
      <Signup
        handleClose={handleClose}
        handleLoginShow={handleLoginShow}
        show={show}
      />

      {/* login Modal */}
      <Login
        handleLoginClose={handleLoginClose}
        handleShow={handleShow}
        showLogin={showLogin}
      />
    </>
  );
};

export default NavBar;
