import { OnboardingActions } from './onboarding.actions';

const DEFAULT_ONBOARDING_FIELDS = {
  username: null,
  authenticated: false
};

export const onboarding = (state = DEFAULT_ONBOARDING_FIELDS, action) => {
  switch (action.type) {
    case OnboardingActions.SIGNUP: {
      return {
        ...state
      };
    }
    case OnboardingActions.LOGIN:
      return {
        ...state,
        authenticated: true,
        username: action.username
      };
    case OnboardingActions.LOGOUT:
      return {
        ...state,
        authenticated: false,
        username: null
      };
    default:
      return state;
  }
};
