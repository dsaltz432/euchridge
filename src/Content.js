import React from 'react';
import { Link } from 'react-scroll';
import getSections from './Api';
import './Content.css';

const Titles = props => {
  const { sections } = props;
  const elements = sections.map((section, index) => {
    const uniqueId = `${section}_${index}`;
    return (
      <li>
        <Link activeClass="active" className={uniqueId} to={uniqueId} spy smooth duration={500}>
          {section.title}
        </Link>
      </li>
    );
  });
  return <ul>{elements}</ul>;
};

const Descriptions = props => {
  const { sections } = props;
  const elements = sections.map((section, index) => {
    const uniqueId = `${section}_${index}`;
    return (
      <div id={uniqueId}>
        <h2>{section.title}</h2>
        <p>{section.desc}</p>
      </div>
    );
  });
  return <div>{elements}</div>;
};

export default class Content extends React.Component {
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
