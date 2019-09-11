import React from 'react';
import getSections from '../../utils/api';
import Titles from './titles';
import Descriptions from './descriptions';
import './rules.css';

export default class Rules extends React.Component {
  render() {
    const sections = getSections();
    const { username } = this.props;
    return (
      <div>
        <div className="sidenav">
          <Titles sections={sections} />
        </div>
        <div className="main">
          <h2>{`You are logged in, ${username}`}</h2>
          <h1>Introduction to Euchridge</h1>
          <Descriptions sections={sections} />
        </div>
      </div>
    );
  }
}
