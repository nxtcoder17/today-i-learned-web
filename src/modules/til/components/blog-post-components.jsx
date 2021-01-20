import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react';
import { doSpacing } from '#commons/styled-components-util';
import { FlexBox } from '#commons/components/flex-box';
import { Emoji } from '#commons/components/emoji-comp';

export const BlogPostContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 32px;
  padding: ${doSpacing(4)};
  background-color: rgba(33, 33, 32, 0.45);
  backdrop-filter: blur(4px);
  border: 0.1rem solid black;
  border-radius: 16px;
  overflow-y: none;
`;

export const PostTitle = styled.h2`
  z-index: 2;
  background: linear-gradient(45deg, #2ebf91, #8360c3);
  font-family: 'Dancing Script';
  font-size: 3rem;
  background-clip: text;
  padding-left: ${doSpacing(2)};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const PostSubtitle = styled(PostTitle)`
  font-size: 1rem;
  background: linear-gradient(to left, #2ebf91, #8360c3);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;

`;

export const PostContent = styled.div`
  color: white;
  z-index: 9999999;
  padding: ${doSpacing(2)};
  font-size: 1rem;
  font-family: 'Acme';
`;

export const TagsContainer = styled(FlexBox)``;

export const Tag = styled((props) => <Link {...props} />)`
  ::before {
    content: '#';
  }
  color: #398dba;
  font-size: 1.5rem;
  text-decoration: unset;
  font-family: 'Dancing Script';
`;

export const Author = styled.span`
  font-size: 1.5rem;
  font-family: 'Dancing Script';
  transform: rotate(-7deg);
  font-weight: 1000;
  text-decoration: underline;
  color: white;

  background-image: linear-gradient(to right, tomato, #1054d1, blue);

  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;

  animation-name: signature;
  animation-duration: 2s;
  animation-timing-function: ease-out;
  animation-delay: 0;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-fill-mode: none;
  animation-play-state: running;

  @keyframes signature {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0.25;
    }
    50% {
      opacity: 0.5;
    }
    75% {
      opacity: 0.75;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Signature = styled(({ author, ...props }) => (
  <span {...props}>
    <Emoji symbol="✍️ " />
    <Author>{author || 'nxtcoder17'}</Author>
  </span>
))`
  transform: rotate(-7deg);
`;
