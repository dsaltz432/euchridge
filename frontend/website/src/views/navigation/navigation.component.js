/* eslint-disable */
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import { MenuList, MenuItem } from '@material-ui/core';
import { Rules } from '../rules/rules.container';
import ScoreboardWrapper from '../scoreboard/scoreboard.wrapper';
import './navigation.css';
import { notFound } from './notFound';
import { SignUp } from '../onboarding/signUp/signUp.container';
import { LogIn } from '../onboarding/logIn/logIn.container';
import { LogOut } from '../onboarding/logOut/logOut.container';

export default class NavigationView extends React.Component {
  constructor(props) {
    super(props);
    console.log("NavigationView constructor()");

    this.authenticated = this.authenticated.bind(this);

    if (this.props.authenticated) {
        this.authenticated();
    }
  }

    componentDidMount() {
        console.log("NavigationView componentDidMount()");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("NavigationView componentDidUpdate()");
    }

    authenticated() {
    // this.props.loadData();
    console.log("authenticated!!");
  }

  render() {
      console.log("NavigationView render()");
      const { authenticated } = this.props;
    return (
      <BrowserRouter>
          {
              authenticated &&
              <MenuList className="header_menu_list">
                      <MenuItem className="header_menu_item">
                          <Link className="header_menu_item_link" to="/logOut">Log Out</Link>
                      </MenuItem>
                      <MenuItem className="header_menu_item">
                          <Link className="header_menu_item_link" to="/scoreboard">Scoreboard</Link>
                      </MenuItem>
                      <MenuItem className="header_menu_item">
                          <Link className="header_menu_item_link" to="/rules">Rules</Link>
                      </MenuItem>
              </MenuList>
          }
          <Switch>
            <PrivateRoute authenticated={authenticated} path="/rules" component={Rules}/>
            <PrivateRoute authenticated={authenticated} path="/scoreboard" component={ScoreboardWrapper}/>
            <PrivateRoute authenticated={authenticated} path="/logOut" component={LogOut}/>
            <Route exact path="/"
              render={props =>
                authenticated ? (
                  <Redirect to={{pathname: '/rules', state: { from: props.location } }} />
                ) : (
                  <Redirect to={{pathname: '/logIn', state: { from: props.location } }} />
                )}
            />
            <Route path="/signUp"
              render={props =>
                authenticated ? (
                  <Redirect to={{pathname: '/rules', state: { from: props.location } }} />
                ) : (
                  <SignUp {...props} />
                )}
            />
            <Route path="/logIn"
              render={props =>
                authenticated ? (
                  <Redirect to={{ pathname: '/rules', state: { from: props.location } }} />
                ) : (
                  <LogIn {...props} />
                )}
            />
            <Route component={notFound} />
          </Switch>
      </BrowserRouter>
    );
  }
}

const PrivateRoute = ({ component: Component, authenticated, username, ...rest }) => {
  return (
    <Route {...rest}
      render={props =>
        authenticated === true ? (
          <Component {...props} username={username} />
        ) : (
          <Redirect to={{ pathname: '/signUp', state: { from: props.location } }} />
        )}
    />
  );
};
