import React, { useEffect, useState } from "react";
import PagePanel from "../components/PagePanel";
import Loading from "../components/Loading";
import Error from "../components/Error";
import FoodCard from "../components/FoodCard";
import axios from "axios";
import "../css/RecipeSearchPage.css";
import "../css/Foods.css";

const Categories = () => {
  const [meal, setMeal] = useState(
    JSON.parse(sessionStorage.getItem("category")) || []
  );
  const [loading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    setMeal([]);
    setErr("");
    setIsLoading(true);
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((data) => {
        setMeal(data.data.categories);
        setIsLoading(false);
        sessionStorage.setItem(
          "category",
          JSON.stringify(data.data.categories)
        );
      })
      .catch((err) => {
        setErr(err.message);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", clearSessionStorage);
    return () => {
      window.removeEventListener("beforeunload", clearSessionStorage);
    };
  }, []);
  const clearSessionStorage = () => {
    sessionStorage.removeItem("category");
  };

  document.title = 'Yummy Cuisine | Categories'

  return (
    <PagePanel>
      <main className="recipe-search">
        {loading ? <Loading /> : err ? <Error err={err} /> : null}
        {meal.length > 0 && (
          <div className="food-container">
            <h3>Foods Categories</h3>
            <div className="food-card-container">
              {meal.map(({ idCategory, strCategory, strCategoryThumb }) => {
                return (
                  <FoodCard
                    key={idCategory}
                    route = 'categories'
                    id={strCategory}
                    name={strCategory}
                    img={strCategoryThumb}
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

export default Categories;
