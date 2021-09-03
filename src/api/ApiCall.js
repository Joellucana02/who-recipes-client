import React, { useState, useEffect } from "react";
import { ApiData } from "./ApiData";
const { API_KEY, ROOT_API_RECIPES } = ApiData;
const recArr = ["main course", "appetizer", "dessert", "salad"];

export const mainRecipesArr = async () => {
  try {
    let promises = [];
    for (let i = 0; i < recArr.length; i++) {
      promises.push(
        await axios.get(
          `${ROOT_API_RECIPES}/complexSearch?type=${recArr[i]}&api_key=${API_KEY}`
          /* headers */
        )
      );
    }
    const AllPromise = await Promise.all(promises);
    setMainRecipes(AllPromise);
  } catch (error) {
    console.log();
  }
};
const getMyList = async (arrList) => {
  try {
    let promises = [];
    for (let i = 0; i < arrList.length; i++) {
      promises.push(
        await axios.get(
          `${ROOT_API_MOVIES}/movie/${arrList[i]}?api_key=${API_KEY}`,
          headers
        )
      );
    }
    const AllPromise = await Promise.all(promises);
    setInfoS(AllPromise);
  } catch (error) {
    console.log(error);
  }
};
getMyList(superInfoArr);
//types allowed
/* main course
side dish
dessert
appetizer
salad
bread
breakfast
soup
beverage
sauce
marinade
fingerfood
snack
drink */
