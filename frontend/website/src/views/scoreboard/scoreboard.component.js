/* eslint-disable */
import React from 'react';

export class ScoreboardView extends React.Component {

  componentDidMount() {
    console.log("ScoreboardView componentDidMount()");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("ScoreboardView componentDidUpdate()");
  }

  render() {
    console.log("ScoreboardView render()");
    return this.props.children({
      ...this.props,
      ...this.state
    });
  }
}
