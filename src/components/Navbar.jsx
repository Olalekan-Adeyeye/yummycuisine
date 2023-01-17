import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav ">
      <ul className="nav-link-wrapper">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/categories">
          Categories
        </NavLink>
        <NavLink className="nav-link" to="/area">
          Area
        </NavLink>
        <NavLink className="nav-link" to="/recipe/search">
          Search
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
