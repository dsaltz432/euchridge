import _ from 'underscore';
import { setAuthenticated } from './onboarding.actions';

function getUsers() {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
}

function success() {
  return { success: true, error: null };
}
function failure(message) {
  return { success: false, error: message };
}

export const logIn = (username, password) => dispatch => {
  console.log('called logIn() within onboarding.helpers.js');
  const authenticated = true;

  // Check credentials
  const users = getUsers();
  if (_.findWhere(users, { username, password })) {
    console.log('Matched credentials!');
    dispatch(setAuthenticated(authenticated, username));
    return success();
  }
  return failure('Invalid credentials!');
};

export const signUp = ({ username, password }) => {
  console.log('called signUp() within onboarding.helpers.js');

  // check if the user exists in the DB
  const users = getUsers();
  if (!_.findWhere(users, { username })) {
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    console.log('Wrote user to DB');
    return success();
  }
  return failure('That username was already taken!');
};
