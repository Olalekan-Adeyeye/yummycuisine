import React, { useEffect, useState } from "react";
import Error from "../components/Error";
import FoodCard from "../components/FoodCard";
import Loading from "../components/Loading";
import PagePanel from "../components/PagePanel";
import Search from "../components/Search";
import "../css/RecipeSearchPage.css";
import "../css/Foods.css";
import useMealFetcher from "../functions/useMealFetcher";

const RecipeSearchpage = () => {
  const sessionSearchValue = sessionStorage.getItem("searchItem");
  const [searchValue, setSearchValue] = useState(sessionSearchValue || "");
  const [meal, setMeal, loading, err, fetchMeals] = useMealFetcher();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchValue)
    setMeal([]);
    fetchMeals(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${sessionSearchValue}`
    );
  };

  useEffect(() => {
    sessionStorage.setItem("searchItem", searchValue);
  }, [searchValue]);

  useEffect(() => {
    window.addEventListener("beforeunload", clearSessionStorage);
    return () => {
      window.removeEventListener("beforeunload", clearSessionStorage);
    };
  }, []);
  const clearSessionStorage = () => {
    sessionStorage.removeItem("searchItem");
    sessionStorage.removeItem("data");
  };

  document.title = `Yummy Cuisine | Recipe-Search`;

  return (
    <PagePanel>
      <main className="recipe-search">
        <Search
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          value={searchValue}
        />
        {loading ? <Loading /> : err ? <Error err={err} show = {false}/> : null}
        {meal.length > 0 && (
          <div className="food-container">
            <h3>Search Results</h3>
            <div className="food-card-container">
              {meal.map(({idMeal, strMeal, strMealThumb}) => {
                return (
                  <FoodCard
                    key={idMeal}
                    route='recipe'
                    id={idMeal}
                    name={strMeal}
                    img={strMealThumb}
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

export default RecipeSearchpage;
