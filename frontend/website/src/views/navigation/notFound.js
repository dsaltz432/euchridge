import React from 'react';

export const notFound = ({ location }) => (
  <div>
    <h2>
      No match found for
      <code>{location.pathname}</code>
    </h2>
  </div>
);
