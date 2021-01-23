import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BiShareAlt } from 'react-icons/bi';
import { doSpacing } from '#commons/styled-components-util';
import { FlexBox } from '#commons/components/flex-box';

export const BlogPostContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 32px;
  padding: ${doSpacing(4)};
  background-color: rgba(33, 33, 32, 0.65);
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

export const PostSubtitle = styled.span`
  font-size: 0.75rem;
  font-family: 'Acme';
  color: #2ebf91;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
`;

export const PostContent = styled.div`
  color: white;
  padding: ${doSpacing(2)};
  font-size: 0.85rem;
  line-height: 1.5;
  font-family: 'lato', sans-serif;

  a {
    text-decoration: unset;
    font-family: 'Acme';
    font-size: 0.75rem;
    color: #d34148;
  }

  code {
    &.language-none {
      padding: 0 ${doSpacing(1)};
    }
    font-family: 'Fura Code';
    font-size: 0.85rem;
  }

  pre[class*='language-'] {
    padding: 0.5rem;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    line-height: 1.25;
  }
`;

export const TagsContainer = styled(FlexBox)`
  gap: ${doSpacing(2)};
`;

export const Tag = styled((props) => <Link {...props} />)`
  ::before {
    content: '#';
  }
  color: #398dba;
  font-size: 1.5rem;
  text-decoration: unset;
  font-family: 'Dancing Script';
`;

export const ShareBtn = styled((props) => (
  <Link {...props}>
    <FlexBox gap={1}>
      <BiShareAlt title="Share" />
      Share
    </FlexBox>
  </Link>
))`
  font-size: 0.9rem;
  font-family: 'Acme';
  text-decoration: unset;
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
