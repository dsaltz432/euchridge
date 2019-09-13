/** @jsx jsx */
import { jsx } from '@emotion/core';
import { styles } from './scoreboard.styles';

export const ScoreboardBrowser = props => {
  // props from the Container
  const { handleScoreUpdate, handleScoreReset, title, scores, username } = props;

  // props from the Wrapper
  const { increment, decrement, totalSum } = props;

  function handleUpdate(playerIndex, change) {
    handleScoreUpdate(playerIndex, change);
    if (change > 0) {
      increment();
    } else {
      decrement();
    }
  }

  return (
    <div css={styles.container}>
      <h1>{`You are logged in, ${username}`}</h1>
      <h2>{title}</h2>
      <div>
        <h2>{`Player 1 Score: ${scores[0]}`}</h2>
        <button type="button" onClick={() => handleUpdate(0, 1)}>
          Up
        </button>
        <button type="button" onClick={() => handleUpdate(0, -1)}>
          Down
        </button>
        <button type="button" onClick={() => handleScoreReset(0)}>
          Reset
        </button>
      </div>
      <div>
        <h2>{`Player 2 Score: ${scores[1]}`}</h2>
        <button type="button" onClick={() => handleUpdate(1, 1)}>
          Up
        </button>
        <button type="button" onClick={() => handleUpdate(1, -1)}>
          Down
        </button>
        <button type="button" onClick={() => handleScoreReset(1)}>
          Reset
        </button>
      </div>
      <div>
        <h2>{`Player 3 Score: ${scores[2]}`}</h2>
        <button type="button" onClick={() => handleUpdate(2, 1)}>
          Up
        </button>
        <button type="button" onClick={() => handleUpdate(2, -1)}>
          Down
        </button>
        <button type="button" onClick={() => handleScoreReset(2)}>
          Reset
        </button>
      </div>
      <div>
        <h2>{`Player 4 Score: ${scores[3]}`}</h2>
        <button type="button" onClick={() => handleUpdate(3, 1)}>
          Up
        </button>
        <button type="button" onClick={() => handleUpdate(3, -1)}>
          Down
        </button>
        <button type="button" onClick={() => handleScoreReset(3)}>
          Reset
        </button>

        <div>
          <h1>{`Total Sum: ${totalSum}`}</h1>
        </div>
      </div>
    </div>
  );
};
