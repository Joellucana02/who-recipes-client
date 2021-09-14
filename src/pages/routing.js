import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Feed from "./Feed";
import User from "./User";
import Me from "./Me";
import Search from "./Search";
import Signup from "./Signup";
import { context } from "../context/AuthContextThis";

const Routing = () => {
  const { user } = useContext(context);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <Redirect to="/login" />}
          </Route>
          <Route path="/me">{user ? <Me /> : <Redirect to="/login" />}</Route>
          <Route path="/signup">
            {user ? <Redirect to="/" /> : <Signup />}
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/search" children={<Search />} />
          <Route path="/user" children={<User />} />
        </Switch>
      </Router>
    </>
  );
};

export default Routing;

{
  /* A <Switch> looks through its children <Route>s and
  renders the first one that matches the current URL. */
}

<Route path="/feed" children={<Feed />} />;
