export const OnboardingActions = {
  SET_AUTHENTICATED: '@onboardingActions/setAuthenticated',
  LOGOUT: '@onboardingActions/logOut'
};

export const setAuthenticated = (authenticated, username) => {
  return {
    type: OnboardingActions.SET_AUTHENTICATED,
    authenticated,
    username
  };
};

export const logOut = () => {
  return {
    type: OnboardingActions.LOGOUT
  };
};
