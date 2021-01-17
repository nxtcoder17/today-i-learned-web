import React from 'react';
import { Route } from 'react-router-dom';
import { TILHome } from './pages/home';

export const TILModule = () => {
  return (
    <>
      <Route exact="/" component={TILHome} />
    </>
  );
};
