import React, { useState, useEffect } from "react";
import PagePanel from "../components/PagePanel";
import Search from "../components/Search";
import "../css/HomePage.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  document.title = `Yummy Cuisine | Home`
  const onRefresh = (e) => {
    sessionStorage.clear()
   };
  return (
    <PagePanel>
      <main className="hero-section">
        <div className="container">
          <h1>your favourite<br/>dishes broken<br/>down into<br/>recipes</h1>
          <Link to="/recipe/search" className="search-food-btn" onClick={onRefresh}>
            Search Food!
          </Link>
        </div>
      </main>
    </PagePanel>
  );
};

export default Homepage;
