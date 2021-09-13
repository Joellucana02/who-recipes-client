import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Feed from "./Feed";
import User from "./User";
import Me from "./Me";
import Search from "./Search";
import Signup from "./Signup";
const Routing = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" children={<Home />} />
          <Route path="/feed" children={<Feed />} />
          <Route path="/signup" children={<Signup />} />
          <Route path="/login" children={<Login />} />
          <Route path="/search" children={<Search />} />
          <Route path="/user" children={<User />} />
          <Route path="/me" children={<Me />} />
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
