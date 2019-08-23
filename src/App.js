import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { MenuList, MenuItem } from '@material-ui/core';
import Rules from './Rules';
import Standings from './Standings';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <MenuList style={{ backgroundColor: 'grey', display: 'inline-block', width: '100%' }}>
            <MenuItem style={{ display: 'inline-block', float: 'right' }}>
              <Link to="/rules" style={{ color: 'white', textDecoration: 'none' }}>
                Rules
              </Link>
            </MenuItem>
            <MenuItem style={{ display: 'inline-block', float: 'right' }}>
              <Link to="/standings" style={{ color: 'white', textDecoration: 'none' }}>
                Standings
              </Link>
            </MenuItem>
          </MenuList>
          <Switch>
            <Route exact path="/rules" component={Rules} />
            <Route path="/standings" component={Standings} />
          </Switch>
        </div>
      </Router>
    );
  }
}
