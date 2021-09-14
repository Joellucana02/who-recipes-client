import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const CommentItem = (props) => {
  const { pId, infoP } = props;
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUser = async () => {
      const user = await axios.get(
        `http://localhost:3010/api/v1/users/${infoP.userId}`
      );
      const data = await user.data;
      setUser(data.data);
    };
    getUser();
  }, []);
  return (
    <div className="comment-container">
      <div className="comment-img">
        <img
          src="https://kctherapy.com/wp-content/uploads/2019/09/default-user-avatar-e1569863570634.png"
          alt="null"
        />
      </div>
      <div className="comment-info">
        {infoP ? (
          <>
            <div>
              {user ? <h4>{user.username}</h4> : <h4>Username</h4>}
              <h5>{new Date(infoP.date).toLocaleDateString()}</h5>
              <h5>{new Date(infoP.date).toLocaleTimeString()}</h5>
            </div>
            <p>{infoP.body}</p>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CommentItem;
