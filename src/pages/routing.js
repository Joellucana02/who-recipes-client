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
            {!user ? <Redirect to="/login" /> : <Home />}
          </Route>
          <Route path="/me">{!user ? <Redirect to="/login" /> : <Me />}</Route>
          <Route path="/signup" children={<Signup />} />
          <Route path="/login" children={<Login />} />
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
