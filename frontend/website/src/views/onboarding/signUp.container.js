/* eslint-disable */
import { connect } from 'react-redux';
import SignUpView from './signUp.component';
import { signUp } from "../../redux/onboarding/onboarding.actions";

const mapState = state => {
    return {

    };
};

const mapDispatch = dispatch => {
    return {
        signUp: (user) => dispatch(signUp(user)),
    };
};

export const SignUp = connect(mapState, mapDispatch)(SignUpView);
