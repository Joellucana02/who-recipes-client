import React from "react";
import DisplayArr from "../components/home/DisplayArr";
const Me = () => {
  return (
    <div>
      <h2>Me</h2>
      <div className="user-page__me">
        <div className="me-info">
          <img src="#" alt="null" />
          <div>
            <h3>Username</h3>
            <h3>Followers</h3>
            <h3>Following</h3>
            <h3>Posts</h3>
          </div>
        </div>
      </div>
      <div className="me-posts">
        <DisplayArr />
      </div>
    </div>
  );
};

export default Me;
