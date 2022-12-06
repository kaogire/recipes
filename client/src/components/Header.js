import React from "react";
import NavBar from "./Navbar";
import Search from "./Search";

function Header() {
  return (
    <header>
      <Logo />
      <NavBar />
      <Search />
    </header>
  );
}

export default Header;
