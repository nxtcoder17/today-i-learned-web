import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const TILHomePage = lazy(() => import('./pages/home'));

export const TILModule = () => {
  return (
    <>
      <Route exact path="/" component={TILHomePage} />
    </>
  );
};
