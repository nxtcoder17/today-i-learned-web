import { nanoid } from 'nanoid';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import RemarkBreaks from 'remark-breaks';
import RemarkGFM from 'remark-gfm';
import styled from 'styled-components';
import { FlexBox } from '#commons/components/flex-box';
import { transformDate } from '../service/date-transformer';
import {
  BlogPostContainer,
  PostContent,
  PostSubtitle,
  PostTitle,
  ShareBtn,
  Tag,
  TagsContainer,
} from './blog-post-components';
import LoadingPosts from './loading-posts-comp';
import { doSpacing } from '#commons/styled-components-util';

const ActionButton = styled.button`
  padding: ${doSpacing(2)};
  font-family: 'Acme';
  font-size: 1rem;
  background: transparent;
  border-radius: 15px;
  backdrop-filter: blur(4px);
  color: white;
`;

const RenderPosts = ({ posts = [], next, prev }) => {
  return (
    <>
      <LoadingPosts when={posts.length === 0} />
      {posts.map((post) => (
        <BlogPostContainer key={nanoid()}>
          <div>
            <PostTitle>{post.title}</PostTitle>
            <PostSubtitle>{transformDate(new Date())}</PostSubtitle>
            <PostContent>
              <ReactMarkdown plugins={[RemarkGFM, RemarkBreaks]}>
                {post.content}
              </ReactMarkdown>
            </PostContent>
          </div>
          <TagsContainer>
            {post.tags.length > 0 &&
              post.tags.map((tag) => (
                <Tag to={`/tags/${tag}`} key={nanoid()}>
                  {tag}
                </Tag>
              ))}

            <FlexBox justify="flex-end" align="center">
              <ShareBtn to={`/id/${post._id}`} />
            </FlexBox>
          </TagsContainer>
        </BlogPostContainer>
      ))}

      {posts.length > 0 && (
        <>
          <FlexBox justify="space-between">
            {!next && <span />}
            {next && (
              <>
                <ActionButton onClick={next} disabled={!next}>
                  Previous Page
                </ActionButton>
              </>
            )}
            {!prev && <span />}
            {prev && (
              <ActionButton onClick={prev} disabled={!prev}>
                Next Page
              </ActionButton>
            )}
          </FlexBox>
        </>
      )}
    </>
  );
};

export default RenderPosts;
