/* eslint-disable */
import { connect } from 'react-redux';
import { ScoreboardView } from './scoreboard.component';

import { handleScoreUpdate, handleScoreReset } from '../../redux/scoreboard/scoreboard.actions';

const mapState = state => {
  const { scoreboard: { scores, title} } = state;
  debugger
  return {
    scores,
    title
  };
};

const mapDispatch = dispatch => {
  debugger
  return {
    handleScoreUpdate: (playerIndex, change) => { dispatch(handleScoreUpdate(playerIndex, change))},
    handleScoreReset: (playerIndex) => { dispatch(handleScoreReset(playerIndex))}
  };
};

export const Scoreboard = connect(mapState, mapDispatch)(ScoreboardView);
