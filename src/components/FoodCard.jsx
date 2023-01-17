import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/FoodCard.css";
import { FaArrowAltCircleLeft, FaBars } from "react-icons/fa";

const FoodCard = (props) => {
  return (
    <Link to={`/${props.route}/${props.id}`} className="food-card">
      {props.img && <img src={props.img} alt="meal pic" />}
      <div className="name-fave">
        <p>{props.name}</p>
        <FaArrowAltCircleLeft style={{ color: "red" }} />
      </div>
    </Link>
  );
};

export default FoodCard;
