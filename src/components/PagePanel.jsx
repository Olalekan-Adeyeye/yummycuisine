import React from "react";
import Header from "./Header";
import '../css/PagePanel.css'

const PagePanel = ({ children }) => {
  return (
    <div className="grid">
      <Header />
      <div className="grid-row-54px"></div>
      {children}
    </div>
  );
};

export default PagePanel;
