import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { AuthReducer } from "./AuthReducer";
const initialState = {
  user: null,
  isFetching: false,
  error: false,
};

export const context = createContext(initialState);
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  return (
    <context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </context.Provider>
  );
};
const AuthContext = context.provider();
