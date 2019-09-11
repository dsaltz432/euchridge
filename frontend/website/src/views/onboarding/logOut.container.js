/* eslint-disable */
import { connect } from 'react-redux';
import LogOutView from './logOut.component';
import { logOut } from "../../redux/onboarding/onboarding.actions";

const mapState = state => {
    return {

    };
};

const mapDispatch = dispatch => {
    return {
        logOut: username => dispatch(logOut(username)),
    };
};

export const LogOut = connect(mapState, mapDispatch)(LogOutView);
