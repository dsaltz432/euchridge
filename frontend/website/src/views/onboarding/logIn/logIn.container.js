/* eslint-disable */
import { connect } from 'react-redux';
import LogInView from './logIn.component';
import {logIn} from "../../../redux/onboarding/onboarding.helpers";

const mapState = state => {
    const { username } = state;
    return {
        username
    };
};

const mapDispatch = dispatch => {
    return {
        logIn: (username, password) => dispatch(logIn(username, password))
    };
};

export const LogIn = connect(mapState, mapDispatch)(LogInView);
