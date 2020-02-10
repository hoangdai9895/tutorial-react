import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import User from "./User";
import Home from "./Home";
function App() {
  return (
    // no la JSX class => classNam
    <div className="App">
      {/* <Header /> */}

      <Router>
        <div>
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

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <User />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
