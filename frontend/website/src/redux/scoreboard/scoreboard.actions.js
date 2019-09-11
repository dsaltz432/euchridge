export const ScoreboardActions = {
  UPDATE_SCORE: '@scoreboardActions/updateScore',
  RESET_SCORE: '@scoreboardActions/resetScore'
};

export const handleScoreUpdate = (playerIndex, change) => {
  return {
    type: ScoreboardActions.UPDATE_SCORE,
    playerIndex,
    change
  };
};

export const handleScoreReset = playerIndex => {
  return {
    type: ScoreboardActions.RESET_SCORE,
    playerIndex
  };
};
