import React from 'react';
import getSections from '../../utils/api';
import { TitlesView } from './titles.component';
import { DescriptionsView } from './descriptions.component';
import './rules.css';

export default class RulesView extends React.Component {
  constructor(props) {
    super(props);
    console.log('RulesView constructor()');
  }

  componentDidMount() {
    console.log('RulesView componentDidMount()');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('RulesView componentDidUpdate()');
  }

  render() {
    const sections = getSections();
    const { username } = this.props;
    return (
      <div>
        <div className="sidenav">
          <TitlesView sections={sections} />
        </div>
        <div className="main">
          <h2>{`You are logged in, ${username}`}</h2>
          <h1>Introduction to Euchridge</h1>
          <DescriptionsView sections={sections} />
        </div>
      </div>
    );
  }
}
