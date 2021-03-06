import React from 'react';
import { fetchPosts } from '../api';
import PageWrapper from '../components/page-wrapper';
import RenderPosts from '../components/render-posts';
import { useBlogPosts } from '../hooks/use-blog-posts';

const TILHome = () => {
  const [posts, nextPage, prevPage] = useBlogPosts(fetchPosts);

  return (
    <PageWrapper>
      <RenderPosts posts={posts} next={nextPage} prev={prevPage} />
    </PageWrapper>
  );
};

export default TILHome;
