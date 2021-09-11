import React from "react";
import { AuthRegister } from "../api/ApiAuthCall";

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
      <h2>LOGIN</h2>
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
        </form>
      </div>
    </div>
  );
};

export default Signup;
