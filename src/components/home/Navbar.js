import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../context/AuthActions";
import { context } from "../../context/AuthContextThis";

const Navbar = () => {
  const { user, dispatch } = useContext(context);
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="login-header">
      <div className="login-navbar">
        <div>
          <button>SEARCH OR MENU</button>
        </div>
        <div>
          <Link to="/">WHO SOCIAL</Link>
        </div>
        <div>
          <>
            {!user ? (
              <button>USERNAME</button>
            ) : (
              <button>{user.username}</button>
            )}
          </>
          <button onClick={handleLogout}>LOGOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
