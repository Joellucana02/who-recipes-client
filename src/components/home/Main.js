import React from "react";

const Main = (props) => {
  const { featured } = props;
  const [reqOne, reqTwo, reqThree, reqFour] = featured;
  return (
    <div>
      {!reqOne ? (
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
      )}
    </div>
  );
};

export default Main;
