/* eslint-disable */
import React from 'react';

export class ScoreboardView extends React.Component {
  render() {
    return this.props.children({
      ...this.props,
      ...this.state
    });
  }
}
