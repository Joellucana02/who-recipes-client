import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import CommentItem from "./CommentItem";
const DisplayItem = (props) => {
  const { uId, data, postId } = props;
  const [userData, setUserData] = useState({});
  const [comments, setComments] = useState(false);
  useEffect(() => {
    const getUser = async () => {
      const user = await axios.get(
        `http://localhost:3010/api/v1/users/${uId}
        `
      );
      const data = await user.data;
      setUserData(data.data);
      console.log(data);
    };

    getUser();
  }, []);
  const handleComments = () => {
    if (comments === false) {
      setComments(true);
    } else if (comments === true) {
      setComments(false);
    }
  };
  return (
    <>
      {data ? (
        <div className="card">
          <div className="card-top__info">
            <div>
              <img
                src="https://kctherapy.com/wp-content/uploads/2019/09/default-user-avatar-e1569863570634.png"
                alt="null"
              />
              {userData ? (
                <button>{userData.username}</button>
              ) : (
                <button>USERNAME</button>
              )}
            </div>
            <div>
              <button>FOLLOW</button>
              <button>MORE</button>
            </div>
          </div>
          <div className="card-main__content">
            <p>{data.desc}</p>
          </div>
          <div className="card-bottom__btn">
            <div className="card-bottom__btn-left">
              <button>VOTES: {data.votes.length}</button>
              <button onClick={handleComments}>
                COMMENTS: {data.comments.length}
              </button>
            </div>
            <div className="card-bottom__btn-right">
              <button>SHARE</button>
            </div>
          </div>
          {comments ? (
            <>
              {data.comments.length > 0 ? (
                <>
                  {data.comments.map((el) => (
                    <CommentItem key={el._id} pId={el._id} infoP={el} />
                  ))}
                </>
              ) : (
                ""
              )}
            </>
          ) : (
            ""
          )}
        </div>
      ) : (
        <h3>LOADING...</h3>
      )}
    </>
  );
};

export default DisplayItem;
