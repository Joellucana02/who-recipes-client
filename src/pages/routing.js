import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Registrer";
import Feed from "./Feed";
import User from "./User";
import Me from "./Me";

const Routing = () => {
  return (
    <>
      <div>hello world</div>
      <Router>
        <Switch>
          <Route exact path="/" children={<Home />} />
          <Route path="/feed" children={<Feed />} />
          <Route path="/signup" children={<Register />} />
          <Route path="/login" children={<Login />} />
          <Route path="/search" children={<User />} />
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
