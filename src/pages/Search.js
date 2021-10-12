import React from "react";
import Navbar from "../components/home/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

const Search = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [resultsC, setResultsC] = useState({});
  const [resultsInput, setResultsInput] = useState({});
  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get(`http://localhost:3010/api/v1/users`);
      const data = await res.data;
      console.log(data.data);
      setResultsC(data.data);
    };
    getUsers();
  }, []);
  useEffect(() => {
    console.log(inputSearch);
    const getUsers = async () => {
      const res = await axios.get(
        `http://localhost:3010/api/v1/users/param?search=${inputSearch}`
      );
      const data = await res.data;
      console.log(data.data);
      setResultsInput(data.data);
    };
    getUsers();
  }, [inputSearch]);
  const getUser = (data) => {
    localStorage.setItem("user", data._id);
  };
  function Item(props) {
    const { data } = props;
    const getUser = () => {
      localStorage.setItem("user", data._id);
    };
    return (
      <div className="following-item">
        <img
          src="https://kctherapy.com/wp-content/uploads/2019/09/default-user-avatar-e1569863570634.png"
          alt={data.username}
        />
        <Link to="/user">
          <button onClick={getUser}>{data.username}</button>
        </Link>
      </div>
    );
  }
  function FollowingC() {
    return (
      <div>
        <h3>Results: </h3>

        {resultsC.users.length >= 0 ? (
          <div>
            <>
              {resultsC.users.map((el) => (
                <Item key={el._id} data={el} />
              ))}
            </>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
  function SearchInput() {
    return (
      <div>
        <h3>Results: </h3>

        {console.log(resultsInput)}
        {resultsInput.length > 0 ? (
          <div className="following-item">
            <img
              src="https://kctherapy.com/wp-content/uploads/2019/09/default-user-avatar-e1569863570634.png"
              alt={resultsInput[0].username}
            />
            <Link to="/user">
              <button onClick={getUser(resultsInput[0])}>
                {resultsInput[0].username}
              </button>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <h3>Search</h3>
      <input
        type="text"
        id="mySearch"
        name="mySearch"
        placeholder="What are you looking for?"
        onChange={(e) => setInputSearch(e.target.value)}
      />
      {resultsInput.length > 0 ? <SearchInput /> : ""}
      {resultsC.users ? <FollowingC /> : ""}
    </div>
  );
};

export default Search;
