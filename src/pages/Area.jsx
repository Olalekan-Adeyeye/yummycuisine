import React, { useEffect, useState } from "react";
import PagePanel from "../components/PagePanel";
import Loading from "../components/Loading";
import Error from "../components/Error";
import FoodCard from "../components/FoodCard";
import axios from "axios";
import "../css/RecipeSearchPage.css";
import "../css/Foods.css";

const Area = () => {
  const [meal, setMeal] = useState(
    JSON.parse(sessionStorage.getItem("area")) || []
  );
  const [loading, setIsLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    setErr("");
    setIsLoading(true);
    axios
      .get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((data) => {
        setMeal(data.data.meals);
        console.log(data.data.meals);
        setIsLoading(false);
        sessionStorage.setItem("area", JSON.stringify(data.data.meals));
      })
      .catch((err) => {
        setErr(err.message);
        setIsLoading(false);
      });
  }, []);

  // useEffect(() => {
  //   window.addEventListener("beforeunload", clearSessionStorage);
  //   return () => {
  //     window.removeEventListener("beforeunload", clearSessionStorage);
  //   };
  // }, []);
  // const clearSessionStorage = () => {
  //   sessionStorage.removeItem("area");
  // };

  document.title = "Yummy Cuisine | Area";

  return (
    <PagePanel>
      <main className="recipe-search">
        {loading ? (
          <Loading />
        ) : err ? (
          <Error err={err} />
        ) : (
          <div className="food-container">
            <h3>Foods Area</h3>
            <div className="food-card-container">
              {meal.map(({ strArea }) => {
                return (
                  <FoodCard
                    key={strArea}
                    route="area"
                    id={strArea}
                    name={strArea}
                    img='Google-Noto-Emoji-Food-Drink-32364-hot-pepper.svg'
                  />
                );
              })}
            </div>
          </div>
        )}
      </main>
    </PagePanel>
  );
};

export default Area;
