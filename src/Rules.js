import React from 'react';
import getSections from './Api';
import Titles from './Titles';
import Descriptions from './Descriptions';
import './Rules.css';

export default class Rules extends React.Component {
  render() {
    const sections = getSections();
    return (
      <div>
        <div className="sidenav">
          <Titles sections={sections} />
        </div>
        <div className="main">
          <h1>Introduction to Euchridge</h1>
          <Descriptions sections={sections} />
        </div>
      </div>
    );
  }
}
