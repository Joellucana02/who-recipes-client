import axios from "axios";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { followUser } from "../api/ApiAuthCall";
import AddPost from "../components/home/AddPost";
import DisplayArr from "../components/home/DisplayArr";
import Navbar from "../components/home/Navbar";
import { context } from "../context/AuthContextThis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const UserThis = () => {
  const [userData, setUserData] = useState({});
  const [userC, setUser] = useState({});
  const userId = localStorage.getItem("user");
  const { user, jwt } = useContext(context);
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
  const follow = () => {
    followUser(user._id, userC._id, jwt);
    console.log("hello world...");
  };
  let { path, url } = useRouteMatch();
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
                <button onClick={follow}>Follow</button>
                <button>Report</button>
              </div>
            ) : (
              ""
            )}
            <div className="me-info__stats">
              <Router>
                <Link to={`${url}/followers`}>
                  <button>Followers: {userC.followers.length}</button>
                </Link>
                <Link to={`${url}/following`}>
                  <button>Following: {userC.followings.length}</button>
                </Link>
                <Link to={`${url}`}>
                  <button>Posts: {userData.length} </button>
                </Link>
                <Switch>
                  {/* <Route exact path={path}>
                      <h3>this is posts</h3>
                    </Route> */}
                  <Route path={`${path}/:id`}>
                    <FollowingC />
                  </Route>
                  <Route path={`${path}/:id`}>
                    <FollowersC />
                  </Route>
                </Switch>
              </Router>
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
function FollowingC() {
  let { id } = useParams();
  return (
    <div>
      <h3>{id}</h3>
      <h3>this is following</h3>
    </div>
  );
}
function FollowersC() {
  let { id } = useParams();
  return (
    <div>
      <h3>{id}</h3>
      <h3>this is followers</h3>
    </div>
  );
}
