import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './home'
import Login from './login'
import Register from './registrer'
import Feed from './feed'
import User from './user'
import Me from './me'
// import MyApi from '../api/myApi'; // test-123 

const routing = () => {
    return (
        <Router>
    {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
          {/* <Route path="/myApi"    children={<MyApi/>} /> test-123  */}
          <Route exact path="/"   children={<Home/>} />
          <Route path="/feed"     children={<Feed/>} />
          <Route path="/register" children={<Register/>} />
          <Route path="/login"    children={<Login/>} />
          <Route path="/user"     children={<User/>} />
          <Route path="/userId"   children={<User/>} />
          <Route path="/me"       children={<Me/>} />
          </Switch>
      </Router>
      
    )
}

export default routing

/* 
function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
} */
    {/* <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </div>
    */}  