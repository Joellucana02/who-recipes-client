import React, { useContext, useState } from "react";
import { Authlogin } from "../api/ApiAuthCall";
import Navbar from "../components/login/Navbar";
import { context } from "../context/AuthContextThis";

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const { isFetching, dispatch } = useContext(context);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(formValues);
    Authlogin(formValues, dispatch);
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
            placeholder="Email"
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
        </form>
      </div>
    </div>
  );
};

export default Login;
