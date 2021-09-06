import React from "react";
import CarouselItem from "./CarouselItem";
const CarouselArr = (props) => {
  const { recipes } = props;
  return (
    <div>
      {!recipes ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {recipes.data.meals.map((el) => (
            <CarouselItem key={el.idMeal} result={el} id={el.idMeal} />
          ))}
        </>
      )}
    </div>
  );
};

export default CarouselArr;
