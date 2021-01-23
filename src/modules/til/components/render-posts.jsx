import { nanoid } from 'nanoid';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import RemarkBreaks from 'remark-breaks';
import RemarkGFM from 'remark-gfm';
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

const RenderPosts = ({ posts }) => {
  return (
    <>
      <LoadingPosts when={posts.length === 0} />
      {posts.map((post) => (
        <BlogPostContainer key={nanoid()}>
          <div>
            <PostTitle>{post.title}</PostTitle>
            <PostSubtitle>{transformDate(new Date())}</PostSubtitle>
            <PostContent>
              <ReactMarkdown
                plugins={[RemarkGFM, RemarkBreaks]}
                children={post.content}
              />
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
    </>
  );
};

export default RenderPosts;
