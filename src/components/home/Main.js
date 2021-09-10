import React, { useEffect, useState } from "react";
import AddPost from "./AddPost";
import DisplayArr from "./DisplayArr";

const Main = (props) => {
  useEffect(() => {
    console.log("render this");
  }, []);
  return (
    <div>
      <h2>Future posts will appear here</h2>
      <AddPost />
      <DisplayArr />
    </div>
  );
};

export default Main;
/* {!reqOne ? (
  <h2>Loading...</h2>
) : (
  <>
    <div className="item-main">
      <img src={reqOne.data.meals[0].strMealThumb} />
      <div>
        <button>{reqOne.data.meals[0].strMeal}</button>
        <button>{reqOne.data.meals[0].idMeal}</button>
        <button>-----------------------------</button>
      </div>
    </div>
  </>
)} */
