import React from "react";
import Navbar from "./Navbar";
import "../css/Header.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h3>
          <Link to="/">
            Yummy<span>Cuisine</span>
          </Link>
        </h3>
        <input type="checkbox" name="checkbox" className="checkbox" />
        <FaBars className="menu" />
        <FaTimes className="closeMenu"/>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
