import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
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
import UserFollowing from "./UserFollowing";
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
  let { path, url } = useRouteMatch();
  function FollowingC() {
    let { id } = useParams();
    return (
      <div>
        <h3>{id}</h3>
        {id === "following" ? (
          <>
            {data.followings.length > 0 ? (
              <div>
                {data.followings.map((el) => (
                  <UserFollowing key={el._id} dataId={el} />
                ))}
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          <>
            {data.followers.length > 0 ? (
              <div>
                {data.followers.map((el) => (
                  <UserFollowing key={el._id} dataId={el} />
                ))}
              </div>
            ) : (
              ""
            )}
          </>
        )}
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <Router>
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
                <Link to={`${url}/followers`}>
                  <button>Followers: {data.followers.length}</button>
                </Link>
                <Link to={`${url}/following`}>
                  <button>Following: {data.followings.length}</button>
                </Link>
                <Link to={`${url}`}>
                  <button>Posts: {meData.length} </button>
                </Link>
              </div>
            </div>
          ) : (
            <h3>Loading...</h3>
          )}
          <div className="me-posts">
            <AddPost />
            <Switch>
              <Route path={`${path}/:id`}>
                <FollowingC />
              </Route>
            </Switch>
            {meData.length > 0 ? (
              <DisplayArr value={meData} />
            ) : (
              <h2>No post available. Create posts to gain Followers</h2>
            )}
          </div>
        </div>
      </Router>
    </>
  );
};

export default Me;
