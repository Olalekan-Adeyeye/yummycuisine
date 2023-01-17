import React, { useEffect, useState } from "react";
import PagePanel from "../components/PagePanel";
import Loading from "../components/Loading";
import Error from "../components/Error";
import FoodCard from "../components/FoodCard";
import axios from "axios";
import "../css/SingleRecipePage.css";
import { useParams } from "react-router-dom";

const SingleCategoryPage = () => {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [err, setErr] = useState("");
  document.title = `Yummy Cuisine | ${id}`;

  useEffect(() => {
    setErr("");
    setIsLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.meals);
        setIsLoading(false);
        console.log(data.meals);
      })
      .catch((err) => {
        setErr(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <PagePanel>
      {loading ? (
        <Loading />
      ) : err ? (
        <Error err={err} />
      ) : (
        <main className="recipe-search">
          {loading ? <Loading /> : err ? <Error err={err} /> : null}
          {data.length > 0  && (
            <div className="food-container">
              <h3>{id} Food Categories</h3>
              <div className="food-card-container">
                {data.map(({ idMeal, strMeal, strMealThumb }) => {
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
      )}
    </PagePanel>
  );
};

export default SingleCategoryPage;
