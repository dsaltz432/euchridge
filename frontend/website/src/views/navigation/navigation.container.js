/* eslint-disable */
import { connect } from 'react-redux';
import NavigationView from './navigation.component';

const mapState = state => {
    const { onboarding: { authenticated } } = state;
    return {
        authenticated
    };
};

const mapDispatch = dispatch => {
    return {

    };
};

export const Navigation = connect(mapState, mapDispatch)(NavigationView);
