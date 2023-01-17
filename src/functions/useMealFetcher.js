import React, { useState } from 'react'
import axios from 'axios';

const useMealFetcher = (cacheData = "data") => {
  const [meal, setMeal] = useState(
    JSON.parse(sessionStorage.getItem(cacheData)) || []
  );
  const [loading, setIsLoading] = useState(false); 
  const [err, setErr] = useState("");

  function fetchMeals(url) {
    setErr("");
    setIsLoading(true);
    axios
      .get(url)
      .then((data) => {
        if(data.data.meals){
          setMeal(data.data.meals);
          setIsLoading(false);
          sessionStorage.setItem(cacheData, JSON.stringify(data.data.meals));
        }
        else{
          setErr("No match Found")
          setIsLoading(false);
        }
        
        
        console.log(data.data.meals)
       
      })
      .catch((err) => {
        setErr(err.message);
        setIsLoading(false);
      });
  }
  return [meal, setMeal, loading, err, fetchMeals]
}

export default useMealFetcher