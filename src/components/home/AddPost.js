import React from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { postSomething } from "../../api/ApiAuthCall";
import { context } from "../../context/AuthContextThis";

const AddPost = () => {
  const [postInput, setPostInput] = useState({
    post: "",
  });
  const { user, jwt } = useContext(context);
  const handlePost = () => {
    postSomething(user._id, postInput.post, jwt);
  };
  return (
    <div className="add-post">
      <textarea
        id="comment-box"
        name="comment-box"
        placeholder="What`s on Your Mind"
        rows="5"
        cols="40"
        maxLength="300"
        onChange={(e) =>
          setPostInput({
            ...postInput,
            post: e.target.value,
          })
        }
      ></textarea>
      <button onClick={handlePost}>Send</button>
    </div>
  );
};

export default AddPost;
