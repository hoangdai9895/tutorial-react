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
    <div className="App">
      {/* <About /> */}
      <Home />
    </div>
  );
}

export default App;
