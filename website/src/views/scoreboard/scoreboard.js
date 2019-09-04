import React from 'react';

export default class Scoreboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Scoreboard',
      scores: [0, 0, 0, 0]
    };
  }

  handleScoreUpdate(playerIndex, change) {
    const { scores } = this.state; // access scores using destructuring
    const newScores = scores.slice(); // copy the array
    newScores[playerIndex] += change; // manipulate the copy of the array

    // update state
    this.setState(prevState => ({
      ...prevState.title,
      scores: newScores
    }));
  }

  render() {
    const { title, scores } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <div>
          <h2>{`Player 1 Score: ${scores[0]}`}</h2>
          <button type="button" onClick={() => this.handleScoreUpdate(0, 1)}>
            Up
          </button>
          <button type="button" onClick={() => this.handleScoreUpdate(0, -1)}>
            Down
          </button>
        </div>
        <div>
          <h2>{`Player 2 Score: ${scores[1]}`}</h2>
          <button type="button" onClick={() => this.handleScoreUpdate(1, 1)}>
            Up
          </button>
          <button type="button" onClick={() => this.handleScoreUpdate(1, -1)}>
            Down
          </button>
        </div>
        <div>
          <h2>{`Player 3 Score: ${scores[2]}`}</h2>
          <button type="button" onClick={() => this.handleScoreUpdate(2, 1)}>
            Up
          </button>
          <button type="button" onClick={() => this.handleScoreUpdate(2, -1)}>
            Down
          </button>
        </div>
        <div>
          <h2>{`Player 4 Score: ${scores[3]}`}</h2>
          <button type="button" onClick={() => this.handleScoreUpdate(3, 1)}>
            Up
          </button>
          <button type="button" onClick={() => this.handleScoreUpdate(3, -1)}>
            Down
          </button>
        </div>
      </div>
    );
  }
}
