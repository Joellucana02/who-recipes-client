import React, { useContext } from "react";
import { AuthRegister } from "../api/ApiAuthCall";
import { useState, useEffect } from "react";
import Navbar from "../components/login/Navbar";
import { context } from "../context/AuthContextThis";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const { isFetching, dispatch, dispatchjwt } = useContext(context);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(formValues);
    AuthRegister(formValues, dispatch, dispatchjwt);
  };
  return (
    <div>
      <Navbar />
      <h2>SIGNUP</h2>
      <div className="login-form__container">
        <form>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="nickname"
            onChange={(e) =>
              setFormValues({ ...formValues, username: e.target.value })
            }
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="youremail@example.com"
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Pick a strong password"
            onChange={(e) =>
              setFormValues({ ...formValues, password: e.target.value })
            }
          />
          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            placeholder="please confirm your password"
            onChange={(e) =>
              setFormValues({ ...formValues, passwordConfirm: e.target.value })
            }
          />
          <button
            type="submit"
            value="SIGNUP"
            onClick={(e) => handleLogin(e)}
            disabled={isFetching}
          >
            SIGNUP
          </button>
          <Link to="/login">Already have an account</Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
