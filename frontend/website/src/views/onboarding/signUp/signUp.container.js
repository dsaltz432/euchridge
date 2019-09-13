/* eslint-disable */
import { connect } from 'react-redux';
import SignUpView from './signUp.component';
import { signUp } from "../../../redux/onboarding/onboarding.helpers";

const mapState = state => {
    return {

    };
};

const mapDispatch = dispatch => {
    return {
        signUp: (user) => signUp(user),
    };
};

export const SignUp = connect(mapState, mapDispatch)(SignUpView);
