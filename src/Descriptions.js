import React from 'react';

export default class Descriptions extends React.Component {
  render() {
    const { sections } = this.props;
    const elements = sections.map((section, index) => {
      const uniqueId = `${section}_${index}`;
      return (
        <div key={uniqueId} id={uniqueId}>
          <h2>{section.title}</h2>
          <p>{section.desc}</p>
        </div>
      );
    });
    return <div>{elements}</div>;
  }
}
