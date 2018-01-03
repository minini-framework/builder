import React, { Component } from 'react';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from 'react-router-dom';

import Home from './pages/Home';

//style
import '../node_modules/minini/css/style/global.css';
import '../node_modules/minini/css/style/container.css';
import '../node_modules/minini/css/component/navbar.css';
import '../node_modules/minini/css/style/responsive.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <nav className="nav nav-g-md bg-green nav-md">
              <div className="brand">
                <div className="nav-brand-text text-white">Minini</div>
              </div>
              <ul className="navbar navnav right text-white">
                <li className="nav-item">
                  <a className="nav-link" target="blank" href="https://github.com/dhanyn10/minini">Github</a>
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
