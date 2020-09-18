import React from "react";
import ReactDOM from "react-dom";
/* Add NavLink to importer */
import { BrowserRouter as Router, Route } from "react-router-dom";
import { About } from "./About";
import { Home } from "./Home";
import { Navbar } from "./link";
import { Login } from "./Login";

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>,
  document.getElementById("root")
);
