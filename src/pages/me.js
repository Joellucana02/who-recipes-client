import React from "react";
import DisplayArr from "../components/home/DisplayArr";
import Navbar from "../components/home/Navbar";
const Me = () => {
  return (
    <>
      <Navbar />
      <div className="user-page__me">
        <div className="me-info">
          <div className="img-container">
            <img
              src="https://kctherapy.com/wp-content/uploads/2019/09/default-user-avatar-e1569863570634.png"
              alt="null"
            />
          </div>
          <h3>Username</h3>
          <div className="me-info__stats">
            <button>Follow</button>
            <button>Report</button>
          </div>
          <div className="me-info__stats">
            <button>Followers</button>
            <button>Following</button>
            <button>Posts</button>
          </div>
        </div>
        <div className="me-posts">
          <DisplayArr />
        </div>
      </div>
    </>
  );
};

export default Me;
