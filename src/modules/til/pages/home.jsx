import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { doSpacing, fromPalette } from '#commons/styled-components-util';
import { FlexBox } from '#commons/components/flex-box';
import { fetchPosts } from '../api';
import { BackgroundElement } from '../components/background-element';
import {
  BlogPostContainer,
  PostContent,
  PostSubtitle,
  PostTitle,
  Signature,
  Tag,
  TagsContainer,
} from '../components/blog-post-components';

const Wrapper = styled.div`
  height: 100%;
  overflow: hidden;
  background: ${fromPalette('background')};
  display: grid;
  place-items: center;
`;

const Page = styled.div`
  height: 100%;
  width: 100vw;
  display: grid;
  place-items: center;
  padding: ${doSpacing(12)} ${doSpacing(1)};
  overflow-y: auto;
  z-index: 2;
`;

const Body = styled.div`
  display: grid;
  grid-row-gap: ${doSpacing(4)};
  width: 100%;
  z-index: 2;

  width: min(800px, 100%);
`;

const LoadingMD = `
I will serve the content **hot** and **juicy** as soon as it arrives.
`;

function transformDate(date) {
  return new Date(date).toLocaleString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

const TILHome = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchPosts();
      setTimeout(() => {
        setPosts(data.data);
      }, 1500);
    })();
  }, []);

  return (
    <Wrapper>
      <BackgroundElement />
      <Page>
        <Body>
          {posts.length === 0 && (
            <>
              <BlogPostContainer>
                <div>
                  <PostTitle>Loading ...</PostTitle>
                  <PostSubtitle>{transformDate(new Date())}</PostSubtitle>
                  <PostContent>
                    <ReactMarkdown children={LoadingMD} />
                  </PostContent>
                </div>
                <TagsContainer>
                  <FlexBox justify="flex-end" gap={2}>
                    <Signature />
                  </FlexBox>
                </TagsContainer>
              </BlogPostContainer>
            </>
          )}

          {posts.map((post) => (
            <BlogPostContainer key={nanoid()}>
              <div>
                <PostTitle>{post.title}</PostTitle>
                <PostSubtitle>{transformDate(new Date())}</PostSubtitle>
                <PostContent>
                  <ReactMarkdown children={post.content} />
                </PostContent>
              </div>
              <TagsContainer>
                <Tag to="/tags/vim">vim</Tag>
                <FlexBox justify="flex-end" gap={2}>
                  <Signature author={post.author} />
                </FlexBox>
              </TagsContainer>
            </BlogPostContainer>
          ))}
        </Body>
      </Page>
    </Wrapper>
  );
};

export default TILHome;
