import React from "react";
import NavBar from "./Navbar";
import Search from "./Search";
import Logo from "./Logo";

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
