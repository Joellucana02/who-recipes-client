import axios from "axios";
import { useState, useEffect, useRef, useContext } from "react";
import { context } from "../context/AuthContextThis";
import {
  loginSuccess,
  loginError,
  loginAction,
  loadJwt,
} from "./../context/AuthActions";
/* 
const header = {
  headers: {
    Authorization: `Bearer ${jwt}`,
  },
}; */
export const Authlogin = async (user, dispatch, dispatchjwt) => {
  dispatch(loginAction());
  try {
    const myUser = await axios.post("http://localhost:3010/api/v1/login", user);

    dispatch(loginSuccess(myUser.data.data));
    dispatchjwt(loadJwt(myUser.data.jwt));
    /* localStorage.setItem("jwt", JSON.stringify(myUser.data.jwt)); */
  } catch (error) {
    dispatch(loginError);
  }
};
export const AuthRegister = async (user, dispatch, dispatchjwt) => {
  dispatch(loginAction());
  try {
    const newUser = await axios.post(
      "http://localhost:3010/api/v1/signup",
      user
    );
    console.log(newUser.data.jwt);
    dispatch(loginSuccess(newUser.data.data));
    dispatchjwt(loadJwt(newUser.data.jwt));
    /*  localStorage.setItem("jwt", JSON.stringify(newUser.data.jwt)); */
  } catch (error) {
    dispatch(loginError);
  }
};
export const postSomething = async (user, text, token) => {
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    await axios.post(
      `http://localhost:3010/api/v1/posts`,
      { userId: user, desc: text },
      header
    );
    console.log("success!!!");
  } catch (error) {
    console.log(error);
  }
};
export const commentSomething = async (user, text, token, postId) => {
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    await axios.put(
      `http://localhost:3010/api/v1/posts/${postId}/comment`,
      { userId: user, comments: { body: text } },
      header
    );
    console.log("success!!!");
  } catch (error) {
    console.log(error);
  }
};
