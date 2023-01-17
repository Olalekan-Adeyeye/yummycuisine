import React, { useEffect, useState } from "react";
import PagePanel from "../components/PagePanel";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";
import "../css/SingleRecipePage.css";

const SingleRecipePage = () => {
  let { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setIsLoading] = useState(true);
  const [err, setErr] = useState("");
  // let youtubeLink = "";
  document.title = `Yummy Cuisine | Food Page`;

  useEffect(() => {
    setErr("");
    setIsLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.meals[0]);
        setIsLoading(false);
        console.log(data.meals[0]);
      })
      .catch((err) => {
        setErr(err.message);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    document.title = `Yummy Cuisine | ${data.strMeal}`;
  }, [data])

  return (
    <PagePanel>
      {loading ? (
        <Loading />
      ) : err ? (
        <Error err={err} />
      ) : (
        <main className="recipe-container recipe">
          <h3 className="recipe-head">{data.strMeal}</h3>
          <div className="recipe-image">
            <img src={data.strMealThumb} alt="" />
            {data.strTags && <p className="tag">{data.strTags}</p>}
          </div>
          <div className="recipe-category">
            {data.strArea && <Link to={`/area/${data.strArea}`}><button>{data.strArea}</button></Link>}
            {data.strCategory && <Link to={`/categories/${data.strCategory}`}><button>{data.strCategory}</button></Link>}
          </div>
          <div className="recipe-ingredient">
            <div className="recipe-ingredient-wrapper">
              <div className="recipe-ingredient-flex">
                <h3 className="recipe-ingredient-head">Ingredients</h3>
                <div className="recipe-ingredient-list">
                  <ul>
                    {data.strIngredient1 && (
                      <li>
                        {data.strIngredient1} - {data.strMeasure1}
                      </li>
                    )}
                    {data.strIngredient2 && (
                      <li>
                        {data.strIngredient2} - {data.strMeasure2}
                      </li>
                    )}
                    {data.strIngredient3 && (
                      <li>
                        {data.strIngredient3} - {data.strMeasure3}
                      </li>
                    )}
                    {data.strIngredient4 && (
                      <li>
                        {data.strIngredient4} - {data.strMeasure4}
                      </li>
                    )}
                    {data.strIngredient5 && (
                      <li>
                        {data.strIngredient5} - {data.strMeasure5}
                      </li>
                    )}
                    {data.strIngredient6 && (
                      <li>
                        {data.strIngredient6} - {data.strMeasure6}
                      </li>
                    )}
                    {data.strIngredient7 && (
                      <li>
                        {data.strIngredient7} - {data.strMeasure7}
                      </li>
                    )}
                    {data.strIngredient8 && (
                      <li>
                        {data.strIngredient8} - {data.strMeasure8}
                      </li>
                    )}
                    {data.strIngredient9 && (
                      <li>
                        {data.strIngredient9} - {data.strMeasure9}
                      </li>
                    )}
                    {data.strIngredient10 && (
                      <li>
                        {data.strIngredient10} - {data.strMeasure10}
                      </li>
                    )}
                    {data.strIngredient11 && (
                      <li>
                        {data.strIngredient11} - {data.strMeasure11}
                      </li>
                    )}
                    {data.strIngredient12 && (
                      <li>
                        {data.strIngredient12} - {data.strMeasure12}
                      </li>
                    )}
                    {data.strIngredient13 && (
                      <li>
                        {data.strIngredient13} - {data.strMeasure13}
                      </li>
                    )}
                    {data.strIngredient14 && (
                      <li>
                        {data.strIngredient14} - {data.strMeasure14}
                      </li>
                    )}
                    {data.strIngredient15 && (
                      <li>
                        {data.strIngredient15} - {data.strMeasure15}
                      </li>
                    )}
                    {data.strIngredient16 && (
                      <li>
                        {data.strIngredient16} - {data.strMeasure16}
                      </li>
                    )}
                    {data.strIngredient17 && (
                      <li>
                        {data.strIngredient17} - {data.strMeasure17}
                      </li>
                    )}
                    {data.strIngredient18 && (
                      <li>
                        {data.strIngredient18} - {data.strMeasure18}
                      </li>
                    )}
                    {data.strIngredient19 && <li>{data.strIngredient19}</li>}
                    {data.strIngredient20 && (
                      <li>
                        {data.strIngredient20} - {data.strMeasure20}
                      </li>
                    )}
                    {data.strIngredient21 && (
                      <li>
                        {data.strIngredient21} - {data.strMeasure21}
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="recipe-ingredient-source">
                <p>
                  Source:{" "}
                  <a href={data.strSource} target="_blank">
                    {data.strSource}
                  </a>
                </p>
              </div>
            </div>

            <div className="recipe-ingredients-instructions">
              <h3>How To</h3>
              <p>{data.strInstructions}</p>
            </div>
          </div>
          <div className="recipe-video">
            <h3>How To - Video</h3>
            <iframe
              src={data.strYoutube.replace("watch?v=", "embed/")}
              frameBorder="0"
              allowFullScreen
            >
              jdjdjd
            </iframe>
          </div>
        </main>
      )}
    </PagePanel>
  );
};

export default SingleRecipePage;
