import axios from "axios";
import React, { useEffect, useState } from "react";
import AddPost from "./AddPost";
import DisplayArr from "./DisplayArr";

const Main = (props) => {
  const [displayPosts, setDisplayPosts] = useState([]);
  useEffect(() => {
    console.log("render this");
  }, []);
  useEffect(() => {
    const getPosts = async () => {
      const raw = await axios.get(
        "http://localhost:3010/api/v1/posts?sort=-date&limit=10&page=1"
      );
      const data = raw.data;
      console.log(data);
      setDisplayPosts(data.data);
    };
    getPosts();
  }, []);

  return (
    <div className="feed-column">
      <AddPost />
      {displayPosts ? <DisplayArr value={displayPosts} /> : <h2>Loading</h2>}
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
