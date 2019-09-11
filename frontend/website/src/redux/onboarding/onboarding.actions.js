export const OnboardingActions = {
  SIGNUP: '@onboardingActions/signUp',
  LOGIN: '@onboardingActions/logIn',
  LOGOUT: '@onboardingActions/logOut'
};

export const signUp = user => {
  return {
    type: OnboardingActions.SIGNUP
  };
};

export const logIn = (username, password) => {
  return {
    type: OnboardingActions.LOGIN,
    username
  };
};

export const logOut = user => {
  return {
    type: OnboardingActions.LOGOUT
  };
};
