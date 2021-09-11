import axios from "axios";
import { useState, useEffect, useRef, useContext } from "react";
import {
  loginSuccess,
  loginError,
  loginAction,
  loadJwt,
} from "./../context/AuthActions";

export const Authlogin = async (user, dispatch, dispatchjwt) => {
  dispatch(loginAction());
  try {
    const myUser = await axios.post("http://localhost:3010/api/v1/login", user);

    dispatch(loginSuccess(myUser.data.data));
    dispatchjwt(loadJwt(myUser.data.jwt));
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
  } catch (error) {
    dispatch(loginError);
  }
};
const cookies = document.cookie;
const headers = {
  headers: {
    Authorization: `Bearer ${cookies}`,
  },
};
export const MyList = async (user, addToList) => {
  try {
    const updateList = await axios.post(
      `https://whomovies.herokuapp.com/api/v1/users/${user._id}`,
      { comments: addToList },
      headers
    );
    console.log("success!!!");
  } catch (error) {
    console.log(error);
  }
};
