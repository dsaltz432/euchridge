import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { MenuList, MenuItem } from '@material-ui/core';
import Rules from '../rules/rules';
import ScoreboardWrapper from '../scoreboard/scoreboard.wrapper';
import './navigation.css';

const notFound = ({ location }) => (
  <div>
    <h2>
      No match found for
      <code>{location.pathname}</code>
    </h2>
  </div>
);

export default class Navigation extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <MenuList className="header_menu_list">
            <MenuItem className="header_menu_item">
              <Link className="header_menu_item_link" to="/scoreboard">
                Scoreboard
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
            <Route exact path="/scoreboard" component={ScoreboardWrapper} />
            <Route component={notFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
