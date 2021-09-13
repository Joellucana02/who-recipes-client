import React from "react";
import { Link } from "react-router-dom";

const RoomSideBar = () => {
  return (
    <div className="sidebar room-sidebar">
      <div>
        <Link to="/">WHO SOCIAL</Link>
      </div>
      <button>Active Rooms</button>
      <button>Create a room</button>
      <button>Delete a room</button>
    </div>
  );
};

export default RoomSideBar;
