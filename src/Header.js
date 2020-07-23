import React from "react";
import "./Header.css";
import logo from "./assets/logo.svg";

const Header = () => (
  <header className="header">
    <img src={logo} alt="Recipes Now" className="pic" />
  </header>
);

export default Header;
