import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Authlogin } from "../api/ApiAuthCall";
import Navbar from "../components/login/Navbar";
import { context } from "../context/AuthContextThis";

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const { isFetching, dispatch, dispatchjwt } = useContext(context);

  const handleLogin = (e) => {
    e.preventDefault();
    Authlogin(formValues, dispatch, dispatchjwt);
  };
  return (
    <div>
      <Navbar />
      <h2>LOGIN</h2>
      <div className="login-form__container">
        <form>
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
          <button
            type="submit"
            value="LOGIN"
            onClick={(e) => handleLogin(e)}
            disabled={isFetching}
          >
            LOGIN
          </button>
          <Link to="/signup">Dont have an account? </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
