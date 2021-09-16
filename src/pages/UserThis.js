import axios from "axios";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import AddPost from "../components/home/AddPost";
import DisplayArr from "../components/home/DisplayArr";
import Navbar from "../components/home/Navbar";
import { context } from "../context/AuthContextThis";

const UserThis = () => {
  const [userData, setUserData] = useState({});
  const [userC, setUser] = useState({});
  const userId = localStorage.getItem("user");
  const { user } = useContext(context);
  useEffect(() => {
    const getUser = async () => {
      const raw = await axios.get(
        `http://localhost:3010/api/v1/users/${userId}`
      );
      const data = await raw.data;
      console.log(data);
      setUser(data.data);
    };
    getUser();
  }, []);
  useEffect(() => {
    const getData = async () => {
      const raw = await axios.get(
        `http://localhost:3010/api/v1/users/${userId}/timeline`
      );
      const data = raw.data;
      setUserData(data.data.slice(0).reverse());
    };
    getData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="user-page__me">
        {userC.followers ? (
          <div className="me-info">
            <div className="img-container">
              <img
                src="https://kctherapy.com/wp-content/uploads/2019/09/default-user-avatar-e1569863570634.png"
                alt="null"
              />
            </div>
            <h3>{userC.username}</h3>
            {user._id !== userId ? (
              <div className="me-info__stats">
                <button>Follow</button>
                <button>Report</button>
              </div>
            ) : (
              ""
            )}
            <div className="me-info__stats">
              <button>Followers: {userC.followers.length}</button>
              <button>Following: {userC.followings.length}</button>
              <button>Posts: {userData.length} </button>
            </div>
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
        <div className="me-posts">
          <AddPost />
          {userData.length > 0 ? (
            <DisplayArr value={userData} />
          ) : (
            <h2>No post available. Create posts to gain Followers</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default UserThis;
