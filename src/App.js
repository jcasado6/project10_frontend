import React, { Component } from "react";
import Editwishlist from './Components/Editwishlist.js'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Wishlist from './Components/Wishlist.js'
import Home from './Components/Home.js'
import Owned from './Components/Owned.js'
import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component {
  constructor() {
    super();
    this.state = {
      picture: []
    };
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
          <Link to="/" className="navbar-brand text-dark">SNKR Gallery</Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/wishlist" className="nav-link text-dark">Wishlist</Link>
              </li>
              <li className="navbar-item">
                <Link to="/owned" className="nav-link text-dark">Owned</Link>
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
        <Route path="/edit/:id" render={routerProps => <Editwishlist {...routerProps} />} />
      </div>
    );
  }
}

export default App;