import React from 'react';

export const LoadingIndicator = ({ when = false }) => {
  if (!when) return <></>;
  return <span>Loading ...</span>;
};
