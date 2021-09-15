import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { AuthReducer } from "./AuthReducer";
const initialState = {
  user: JSON.parse(localStorage.getItem("myUser")) || null,
  isFetching: false,
  error: false,
};
const initialjwt = {
  jwt: JSON.parse(localStorage.getItem("jwt")) || null,
};
export const context = createContext(initialState);
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  useEffect(() => {
    localStorage.setItem("myUser", JSON.stringify(state.user));
  }, [state.user]);
  const [stateJWT, dispatchjwt] = useReducer(AuthReducer, initialjwt);
  useEffect(() => {
    localStorage.setItem("jwt", JSON.stringify(stateJWT.jwt));
  }, [stateJWT.jwt]);
  return (
    <context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        jwt: stateJWT.jwt,
        dispatch,
        dispatchjwt,
      }}
    >
      {children}
    </context.Provider>
  );
};
