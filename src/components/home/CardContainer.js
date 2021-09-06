import React from "react";
import CarouselArr from "./CarouselArr";
const CardContainer = (props) => {
  const { recipesArr } = props;
  const [reqOne, reqTwo, reqThree, reqFour] = recipesArr;

  return (
    <div>
      {!recipesArr ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {console.log(reqOne)}
          <CarouselArr recipes={reqOne} />
          <CarouselArr recipes={reqTwo} />
          <CarouselArr recipes={reqThree} />
          <CarouselArr recipes={reqFour} />
        </>
      )}
    </div>
  );
};

export default CardContainer;
