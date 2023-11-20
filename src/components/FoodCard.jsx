import React from "react";
import { Link } from "react-router-dom";
import "../css/FoodCard.css";
import { FaArrowAltCircleLeft} from "react-icons/fa";

const FoodCard = ({route, id, img, name}) => {
  return (
    <Link to={`/${route}/${id}`} className="food-card">
      {img && <img src={img} alt="meal pic" />}
      <div className="name-fave">
        <p>{name}</p>
        <FaArrowAltCircleLeft style={{ color: "red" }} />
      </div>
    </Link>
  );
};

export default FoodCard;
