/* eslint-disable */
import { connect } from 'react-redux';
import { ScoreboardView } from './scoreboard.component';

import { handleScoreUpdate, handleScoreReset } from '../../redux/scoreboard/scoreboard.actions';

const mapState = state => {
  const { onboarding: { username }, scoreboard: { scores, title} } = state;
  return {
    scores,
    title,
    username
  };
};

const mapDispatch = dispatch => {
  return {
    handleScoreUpdate: (playerIndex, change) => { dispatch(handleScoreUpdate(playerIndex, change))},
    handleScoreReset: (playerIndex) => { dispatch(handleScoreReset(playerIndex))}
  };
};

export const Scoreboard = connect(mapState, mapDispatch)(ScoreboardView);
