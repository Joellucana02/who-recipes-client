import React, { useState, useEffect } from "react";

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };

    case "LOGIN_ERROR":
      return {
        user: null,
        isFetching: false,
        error: true,
      };

    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
        error: false,
      };
    case "JWT":
      return {
        jwt: action.jwt,
      };

    default:
      return { ...state };
  }
};
