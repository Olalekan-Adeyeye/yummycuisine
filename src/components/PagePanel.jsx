import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../css/PagePanel.css'

const PagePanel = ({ children }) => {
  return (
    <div className="grid">
      <Header />
      {children}
    </div>
  );
};

export default PagePanel;
