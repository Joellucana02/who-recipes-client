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
  const [data, setData] = useState({});
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
  useEffect(() => {
    const getUser = async () => {
      const raw = await axios.get(
        `http://localhost:3010/api/v1/users/${user._id}`
      );
      const data = raw.data;
      setData(data.data);
    };
    getUser();
  }, []);
  return (
    <>
      <Navbar />
      <div className="user-page__me">
        {data.followers ? (
          <div className="me-info">
            <div className="img-container">
              <img
                src="https://kctherapy.com/wp-content/uploads/2019/09/default-user-avatar-e1569863570634.png"
                alt="null"
              />
            </div>
            <h3>{data.username}</h3>
            {/* <div className="me-info__stats">
            <button>Follow</button>
            <button>Report</button>
          </div> */}
            <div className="me-info__stats">
              <button>Followers: {data.followers.length}</button>
              <button>Following: {data.followings.length}</button>
              <button>Posts: {meData.length} </button>
            </div>
          </div>
        ) : (
          <h3>Loading...</h3>
        )}
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
