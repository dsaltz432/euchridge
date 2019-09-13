/* eslint-disable */
import { connect } from 'react-redux';
import RulesView from './rules.component';

const mapState = state => {
    const { onboarding: { username } } = state;
    return {
        username
    };
};

const mapDispatch = dispatch => {
    return {

    };
};

export const Rules = connect(mapState, mapDispatch)(RulesView);
