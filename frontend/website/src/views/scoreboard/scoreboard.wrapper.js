import React from 'react';
import { ScoreboardBrowser } from './scoreboard.browser';

export default class ScoreboardWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Scoreboard',
      scores: [0, 0, 0, 0]
    };

    this.handleScoreUpdate = this.handleScoreUpdate.bind(this);
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
    const { scores, title } = this.state;
    return (
      <div>
        <ScoreboardBrowser
          handleScoreUpdate={this.handleScoreUpdate}
          title={title}
          scores={scores}
        />
      </div>
    );
  }
}
