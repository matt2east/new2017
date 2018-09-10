import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Contact from "./components/layout/Contact";
import Resources from "./components/layout/Resources";
import About from "./components/layout/About";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/about" component={About} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
