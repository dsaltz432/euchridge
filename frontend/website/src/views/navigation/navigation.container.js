/* eslint-disable */
import { connect } from 'react-redux';
import NavigationView from './navigation.component';

const mapState = state => {
    debugger
    const { onboarding: { username, authenticated } } = state;
    return {
        username,
        authenticated
    };
};

const mapDispatch = dispatch => {
    return {

    };
};

export const Navigation = connect(mapState, mapDispatch)(NavigationView);
