import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchByTag } from '../api';
import { useBlogPosts } from '../hooks/use-blog-posts';
import PageWrapper from '../components/page-wrapper';
import RenderPosts from '../components/render-posts';

const TagsFilteredPage = () => {
  const { tag } = useParams();
  const [posts] = useBlogPosts(() => fetchByTag(tag));

  return (
    <PageWrapper>
      <RenderPosts posts={posts} />
    </PageWrapper>
  );
};

export default TagsFilteredPage;
