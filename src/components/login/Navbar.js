import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
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
          <button>LOGIN</button>
          <button>SIGNUP</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
