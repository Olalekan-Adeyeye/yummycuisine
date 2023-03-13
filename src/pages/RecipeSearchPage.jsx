import React, { useEffect, useState } from "react";
import Error from "../components/Error";
import FoodCard from "../components/FoodCard";
import Loading from "../components/Loading";
import PagePanel from "../components/PagePanel";
import Search from "../components/Search";
import "../css/RecipeSearchPage.css";
import "../css/Foods.css";
import useMealFetcher from "../hooks/useMealFetcher";

const RecipeSearchpage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [meal, setMeal, loading, err, fetchMeals] = useMealFetcher();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchValue);
    setMeal([]);
    fetchMeals(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
    );
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
        {loading ? (
          <Loading />
        ) : err ? (
          <Error err={err} show={false} />
        ) : (
          <div className="food-container">
            <h3 style={{ display: meal.length ? "block" : "none" }}>
              Search Results
            </h3>
            <div className="food-card-container">
              {meal.map(({ idMeal, strMeal, strMealThumb }) => {
                return (
                  <FoodCard
                    key={idMeal}
                    route="recipe"
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
