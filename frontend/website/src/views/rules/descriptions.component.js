import React from 'react';

export const DescriptionsView = props => {
  const { sections } = props;
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
};
