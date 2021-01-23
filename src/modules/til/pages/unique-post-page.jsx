import React from 'react';
import { useParams } from 'react-router-dom';
import { getById } from '../api';
import PageWrapper from '../components/page-wrapper';
import RenderPosts from '../components/render-posts';
import { useBlogPosts } from '../hooks/use-blog-posts';

const UniquePostPage = () => {
  const { id } = useParams();
  const [posts] = useBlogPosts(() => getById(id));

  return (
    <PageWrapper>
      <RenderPosts posts={posts} />
    </PageWrapper>
  );
};

export default UniquePostPage;
