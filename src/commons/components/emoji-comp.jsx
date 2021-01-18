// Source: https://medium.com/@seanmcp/%EF%B8%8F-how-to-use-emojis-in-react-d23bbf608bf7

import React from 'react';

export const Emoji = ({ label, symbol }) => (
  <span
    className="emoji"
    role="img"
    aria-label={label || ''}
    aria-hidden={label ? 'false' : 'true'}
  >
    {symbol}
  </span>
);
