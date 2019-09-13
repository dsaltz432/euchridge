import React from 'react';
import { ScoreboardBrowser } from './scoreboard.browser';
import { Scoreboard } from './scoreboard.container';

export default class ScoreboardWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSum: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    const { totalSum } = this.state;
    this.setState(() => ({
      totalSum: totalSum + 1
    }));
  }

  decrement() {
    const { totalSum } = this.state;
    this.setState(() => ({
      totalSum: totalSum - 1
    }));
  }

  render() {
    const { totalSum } = this.state;
    return (
      <Scoreboard increment={this.increment} decrement={this.decrement} totalSum={totalSum}>
        {props => {
          return ScoreboardBrowser(props);
        }}
      </Scoreboard>
    );
  }
}
