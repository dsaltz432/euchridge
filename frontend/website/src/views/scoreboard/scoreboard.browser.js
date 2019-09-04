/** @jsx jsx */
import { jsx } from '@emotion/core';
import { styles } from './scoreboard.styles';

export const ScoreboardBrowser = props => {
  const { handleScoreUpdate, title, scores } = props;
  return (
    <div css={styles.container}>
      <h1>{title}</h1>
      <div>
        <h2>{`Player 1 Score: ${scores[0]}`}</h2>
        <button type="button" onClick={() => handleScoreUpdate(0, 1)}>
          Up
        </button>
        <button type="button" onClick={() => handleScoreUpdate(0, -1)}>
          Down
        </button>
      </div>
      <div>
        <h2>{`Player 2 Score: ${scores[1]}`}</h2>
        <button type="button" onClick={() => handleScoreUpdate(1, 1)}>
          Up
        </button>
        <button type="button" onClick={() => handleScoreUpdate(1, -1)}>
          Down
        </button>
      </div>
      <div>
        <h2>{`Player 3 Score: ${scores[2]}`}</h2>
        <button type="button" onClick={() => handleScoreUpdate(2, 1)}>
          Up
        </button>
        <button type="button" onClick={() => handleScoreUpdate(2, -1)}>
          Down
        </button>
      </div>
      <div>
        <h2>{`Player 4 Score: ${scores[3]}`}</h2>
        <button type="button" onClick={() => handleScoreUpdate(3, 1)}>
          Up
        </button>
        <button type="button" onClick={() => handleScoreUpdate(3, -1)}>
          Down
        </button>
      </div>
    </div>
  );
};
