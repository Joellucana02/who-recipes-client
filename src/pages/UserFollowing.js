import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserFollowing = (props) => {
  const { dataId } = props;
  const [data, setData] = useState({});
  useEffect(() => {
    const user = async () => {
      const res = await axios.get(
        `http://localhost:3010/api/v1/users/${dataId}`
      );
      const data = await res.data;
      setData(data.data);
    };
    user();
  }, []);
  const getUser = () => {
    localStorage.setItem("user", dataId);
  };
  return (
    <div className="following-item">
      <img
        src="https://kctherapy.com/wp-content/uploads/2019/09/default-user-avatar-e1569863570634.png"
        alt={data.username}
      />
      <Link to="/user">
        <button onClick={getUser}>{data.username}</button>
      </Link>
    </div>
  );
};

export default UserFollowing;
