import React from 'react';
import { fetchPosts } from '../api';
import PageWrapper from '../components/page-wrapper';
import RenderPosts from '../components/render-posts';
import { useBlogPosts } from '../hooks/use-blog-posts';

const TILHome = () => {
  const [posts, nextPage, prevPage] = useBlogPosts(fetchPosts);

  return (
    <PageWrapper next={nextPage} prev={prevPage}>
      <RenderPosts posts={posts} />
    </PageWrapper>
  );
};

export default TILHome;
