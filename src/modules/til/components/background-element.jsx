import React from 'react';
import styled from 'styled-components';
import { doSpacing } from '#commons/styled-components-util';
import { MediaQuery } from '#commons/media-query';

const Wrapper = styled.div`
  position: fixed;
  z-index: 1;
  overflow: hidden;
`;

const Container = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  place-items: center;
`;

const Title = styled.h1`
  font-size: inherit;
  font-family: 'Dancing Script', cursive;
  background-image: linear-gradient(45deg, #79aec6, #af4261);
  background-clip: text;
  padding: ${doSpacing(2)};
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;

  text-align: center;

  ${MediaQuery.lg} {
    text-align: unset;
    &.second {
      text-align: center;
    }
  }
`;

const Header = styled.div`
  display: grid;
  margin: 0 ${doSpacing(2)};
  grid-template-columns: 1fr;
  font-size: 4.5rem;
  // overflow: auto;
  max-height: 100vh;

  ${MediaQuery.md},${MediaQuery.lg} {
    // grid-template-columns: repeat(3, 1fr);
    grid-column-gap: ${doSpacing(12)};

    ${MediaQuery.md} {
      font-size: 5rem;
    }

    ${MediaQuery.lg} {
      font-size: 6rem;
    }
  }

  // Animation start

  animation-name: stretch;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-delay: 0;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-fill-mode: none;
  animation-play-state: running;

  @keyframes stretch {
    0% {
      transform: scale(0.25);
      border-radius: 100%;
    }
    20% {
      transform: scale(1);
    }
    40% {
      transform: scale(1.5);
    }
    60% {
      transform: scale(2);
    }
    80% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  // Animation end
`;

export const BackgroundElement = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Title> Today </Title>
          <Title className="second"> I </Title>
          <Title> Learned </Title>
        </Header>
      </Container>
    </Wrapper>
  );
};
