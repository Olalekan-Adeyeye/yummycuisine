import React from "react";
import '../css/Footer.css'

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return <footer>TiNK ({year})</footer>;
};

export default Footer;
