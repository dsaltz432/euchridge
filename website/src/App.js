import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { MenuList, MenuItem } from '@material-ui/core';
import Rules from './Rules';
import Standings from './Standings';
import './App.css';

const NotFound = ({ location }) => (
  <div>
    <h2>
      No match found for
      <code>{location.pathname}</code>
    </h2>
  </div>
);

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <MenuList className="header_menu_list">
            <MenuItem className="header_menu_item">
              <Link className="header_menu_item_link" to="/standings">
                Standings
              </Link>
            </MenuItem>
            <MenuItem className="header_menu_item">
              <Link className="header_menu_item_link" to="/rules">
                Rules
              </Link>
            </MenuItem>
          </MenuList>
          <Switch>
            <Route exact path="/" component={Rules} />
            <Route exact path="/rules" component={Rules} />
            <Route exact path="/standings" component={Standings} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
