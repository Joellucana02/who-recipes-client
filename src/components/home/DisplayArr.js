import React from "react";
import DisplayItem from "./DisplayItem";
const DisplayArr = (props) => {
  const { value } = props;

  return (
    <div>
      {value.length > 0 ? (
        <>
          <h2>DisplayArr</h2>
          {console.log(value)}
          {value.map((el) => (
            <DisplayItem
              key={el._id}
              data={el}
              uId={el.userId}
              postId={el._id}
            />
          ))}
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default DisplayArr;

{
  /*  */
}
