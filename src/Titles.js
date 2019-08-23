import React from 'react';
import { Link } from 'react-scroll';

export default class Titles extends React.Component {
  render() {
    const { sections } = this.props;
    const elements = sections.map((section, index) => {
      const uniqueId = `${section}_${index}`;
      return (
        <li key={uniqueId}>
          <Link activeClass="active" className={uniqueId} to={uniqueId} spy smooth duration={500}>
            {section.title}
          </Link>
        </li>
      );
    });
    return <ul>{elements}</ul>;
  }
}
