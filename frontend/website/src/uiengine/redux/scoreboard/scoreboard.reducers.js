import { ScoreboardActions } from './scoreboard.actions';

const initialState = {
  scores: [0, 0, 0, 0],
  title: 'Scoreboard Title'
};

export const scoreboard = (state = initialState, action) => {
  const { playerIndex, change } = action;
  const { scores } = state;

  switch (action.type) {
    case ScoreboardActions.UPDATE_SCORE: {
      const copyOfScoresToUpdate = scores.slice();
      copyOfScoresToUpdate[playerIndex] += change;
      return {
        ...state,
        scores: copyOfScoresToUpdate
      };
    }
    case ScoreboardActions.RESET_SCORE: {
      const copyOfScoresToReset = scores.slice();
      copyOfScoresToReset[playerIndex] = 0;
      return {
        ...state,
        scores: copyOfScoresToReset
      };
    }
    default:
      return state;
  }
};
