import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import Home from './pages/Home';

//style
import '../node_modules/minikuna/css/style/global.css';
import '../node_modules/minikuna/css/style/container.css';
import '../node_modules/minikuna/css/style/grid.css';
import '../node_modules/minikuna/css/component/navbar.css';
import '../node_modules/minikuna/css/component/card.css';
import '../node_modules/minikuna/css/style/responsive.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <nav className="nav nav-g-md bg-teal nav-md">
              <div className="brand">
                <div className="nav-brand-text text-white">Minikuna</div>
              </div>
              <ul className="navbar navnav right text-white">
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/dhanyn10/minikuna">Github</a>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route exact path="/" component={Home}/>
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;