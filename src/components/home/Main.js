import React from "react";

const Main = (props) => {
  return (
    <div>
        <>
          <div className="item-main">
            <img src={''} />
            <div>
              <button>f</button>
              <button>d</button>
              <button>-----------------------------</button>
            </div>
          </div>
        </>
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