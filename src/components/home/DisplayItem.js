import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { commentSomething, votePost, followUser } from "../../api/ApiAuthCall";
import { context } from "../../context/AuthContextThis";
import CommentItem from "./CommentItem";
const DisplayItem = (props) => {
  const { uId, data, postId } = props;
  const [userData, setUserData] = useState({});
  const [comments, setComments] = useState(false);
  const [commentInput, setCommentInput] = useState({
    comment: "",
  });

  useEffect(() => {
    const getUser = async () => {
      const user = await axios.get(
        `http://localhost:3010/api/v1/users/${uId}
        `
      );
      const data = await user.data;
      setUserData(data.data);
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
  const { user, jwt } = useContext(context);
  const handleComment = () => {
    commentSomething(user._id, commentInput.comment, jwt, postId);
    console.log("add commment");
  };
  const handleVotes = () => {
    votePost(user._id, postId, jwt);
    console.log("hello world...");
  };
  const follow = () => {
    followUser(user._id, data.userId, jwt);
    console.log("hello world...");
  };
  const getUser = () => {
    localStorage.setItem("user", uId);
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
                <Link to="/user">
                  <button onClick={getUser}>{userData.username}</button>
                </Link>
              ) : (
                <button>USERNAME</button>
              )}
            </div>
            <h5>{new Date(data.date).toLocaleDateString()}</h5>
            <h5>{new Date(data.date).toLocaleTimeString()}</h5>
            <div>
              {user._id !== uId ? <button onClick={follow}>FOLLOW</button> : ""}
              <button>MORE</button>
            </div>
          </div>
          <div className="card-main__content">
            <p>{data.desc}</p>
          </div>
          <div className="card-bottom__btn">
            <div className="card-bottom__btn-left">
              <button onClick={handleVotes}>VOTES: {data.votes.length}</button>
              <button onClick={handleComments}>
                COMMENTS: {data.comments.length}
              </button>
            </div>
            <div className="card-bottom__btn-right">
              <button>SHARE</button>
            </div>
          </div>
          <div>
            <textarea
              id="comment-box"
              name="comment-box"
              placeholder="What`s on Your Mind"
              rows="2"
              cols="40"
              maxLength="300"
              onChange={(e) =>
                setCommentInput({
                  ...commentInput,
                  comment: e.target.value,
                })
              }
            ></textarea>
            <button onClick={handleComment}>Send</button>
          </div>
          {comments ? (
            <>
              {data.comments.length > 0 ? (
                <>
                  {data.comments
                    .slice(0)
                    .reverse()
                    .map((el) => (
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
