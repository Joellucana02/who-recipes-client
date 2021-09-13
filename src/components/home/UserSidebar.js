import React from "react";
import { Link } from "react-router-dom";
const UserSidebar = () => {
  return (
    <div className="sidebar user-sidebar">
      <div>
        <Link to="/">WHO SOCIAL</Link>
      </div>
      <button>SEARCH</button>

      <button>USERNAME</button>
      <button>LOGOUT</button>
    </div>
  );
};

export default UserSidebar;
