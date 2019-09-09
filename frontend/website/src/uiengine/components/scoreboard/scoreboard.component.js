/* eslint-disable */
import React from 'react';

export class ScoreboardView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.children({
      ...this.props,
      ...this.state
    });
  }
}
