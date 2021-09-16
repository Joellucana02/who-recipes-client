import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import AddPost from "../components/home/AddPost";
import DisplayArr from "../components/home/DisplayArr";
import Navbar from "../components/home/Navbar";
import { context } from "../context/AuthContextThis";
const Me = () => {
  const [meData, setMeData] = useState({});
  const { user } = useContext(context);
  useEffect(() => {
    const getData = async () => {
      const raw = await axios.get(
        `http://localhost:3010/api/v1/users/${user._id}/timeline`
      );
      const data = raw.data;
      console.log(data);
      setMeData(data.data);
    };
    getData();
  }, []);
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
          <h3>{user.username}</h3>
          {/* <div className="me-info__stats">
            <button>Follow</button>
            <button>Report</button>
          </div> */}
          <div className="me-info__stats">
            <button>Followers: {user.followers.length}</button>
            <button>Following: {user.followings.length}</button>
            <button>Posts: {meData.length} </button>
          </div>
        </div>
        <div className="me-posts">
          <AddPost />
          {meData.length > 0 ? (
            <DisplayArr value={meData} />
          ) : (
            <h2>No post available. Create posts to gain Followers</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Me;
