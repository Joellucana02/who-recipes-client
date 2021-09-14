import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../context/AuthActions";
import { context } from "../../context/AuthContextThis";

const UserSidebar = () => {
  const { user, dispatch } = useContext(context);
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="sidebar user-sidebar">
      <div>
        <Link to="/">WHO SOCIAL</Link>
      </div>
      <button>SEARCH</button>
      <>
        {!user ? <button>USERNAME</button> : <button>{user.username}</button>}
      </>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
};

export default UserSidebar;
