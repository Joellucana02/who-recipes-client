import React from "react";
import CardContainer from "./CardContainer";
import Footer from "./Footer";
import Main from "./Main";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { ApiData } from "../../api/ApiData";
import axios from "axios";
const { API_KEY, ROOT_API_RECIPES } = ApiData();

const recArr = ["Breakfast", "Starter", "Dessert", "Vegetarian"];

const HomeWrapper = () => {
  const [mainRecipes, setMainRecipes] = useState([]);
  useEffect(() => {
    const mainRecipesArr = async () => {
      try {
        let promises = [];
        for (let i = 0; i < recArr.length; i++) {
          promises.push(
            await axios.get(
              `https://www.themealdb.com/api/json/v1/1/filter.php?c=${recArr[i]}`
              /* headers */
            )
          );
        }
        const AllPromise = await Promise.all(promises);
        setMainRecipes(AllPromise);
      } catch (error) {
        console.log(error);
      }
    };
    mainRecipesArr();
  }, []);
  return (
    <div>
      <Navbar />
      {!mainRecipes ? (
        <h2>LOADING...</h2>
      ) : (
        <>
          {console.log(mainRecipes)}
          <Main featured={mainRecipes} />
          <CardContainer recipesArr={mainRecipes} />
        </>
      )}
      <Footer />
    </div>
  );
};

export default HomeWrapper;

/* {mainRecipes ? console.log(mainRecipes) : console.log("no data")} */
