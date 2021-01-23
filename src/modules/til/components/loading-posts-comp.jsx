import React from 'react';
import ReactMarkdown from 'react-markdown';
import {
  BlogPostContainer,
  PostTitle,
  PostSubtitle,
  PostContent,
} from './blog-post-components';
import { transformDate } from '../service/date-transformer';

const LoadingMD = `
I will serve the content **hot** and **juicy** as soon as it arrives.
`;

const LoadingPosts = ({ when }) => (
  <>
    {!when && <></>}
    {when && (
      <BlogPostContainer>
        <div>
          <PostTitle>Loading ...</PostTitle>
          <PostSubtitle>{transformDate(new Date())}</PostSubtitle>
          <PostContent>
            <ReactMarkdown children={LoadingMD} />
          </PostContent>
        </div>
      </BlogPostContainer>
    )}
  </>
);

export default LoadingPosts;
