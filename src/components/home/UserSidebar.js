import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { logout, logoutjwt } from "../../context/AuthActions";
import { context } from "../../context/AuthContextThis";

const UserSidebar = () => {
  const { user, dispatch, dispatchjwt } = useContext(context);
  const handleLogout = () => {
    dispatch(logout());
    dispatchjwt(logoutjwt());
  };
  return (
    <div className="sidebar user-sidebar">
      <div>
        <Link to="/">WHO SOCIAL</Link>
      </div>
      <button>
        <Link to="/search">SEARCH</Link>
      </button>
      <>
        {!user ? (
          <button>USERNAME</button>
        ) : (
          <button>
            <Link to="/me">{user.username}</Link>
          </button>
        )}
      </>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
};

export default UserSidebar;
