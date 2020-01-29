import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Wishlist from './Components/Wishlist.js'
import Home from './Components/Home.js'
import Owned from './Components/Owned.js'
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      picture: []
    };
  }

  // componentDidMount() {
  //   fetch("http://localhost:8000/wishlist/")
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log(res);
  //     });
  // }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <Link to="/" className="navbar-brand text-white">SNKR Gallery</Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/wishlist" className="nav-link text-white">Wishlist</Link>
              </li>
              <li className="navbar-item">
                <Link to="/owned" className="nav-link text-white">Owned</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Route exact
          path="/"
          component={Home}/>
        <Route exact path="/wishlist" render={routerProps => <Wishlist {...routerProps} />} />
        <Route path="/owned" render={routerProps => <Owned {...routerProps} />} />
      </div>
    );
  }
}

export default App;