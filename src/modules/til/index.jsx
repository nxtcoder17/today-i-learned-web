import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const TILHomePage = lazy(() => import('./pages/home'));
const TagsFilteredPage = lazy(() => import('./pages/tags-filtered-page'));
const UniquePostPage = lazy(() => import('./pages/unique-post-page'));

export const TILModule = () => {
  return (
    <>
      <Route exact path="/" component={TILHomePage} />
      <Route path="/tags/:tag" component={TagsFilteredPage} />
      <Route path="/id/:id" component={UniquePostPage} />
    </>
  );
};
