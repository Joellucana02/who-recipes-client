import React from "react";

const CarouselItem = (props) => {
  const { result, id } = props;
  return (
    <div>
      <div className="item-container">
        <img src={result.strMealThumb} />
        <div>
          <button>{result.strMeal}</button>
          <button>{id}</button>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
