import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { fromPalette, doSpacing } from '#commons/styled-components-util';
import { MediaQuery } from '#commons/media-query';
import { FlexBox } from '#commons/components/flex-box';

const Wrapper = styled.div`
  height: 100%;
  overflow: hidden;
  background: ${fromPalette('background')};
  display: grid;
  place-items: center;
`;

const Container = styled.div`
  display: grid;
  z-index: 1;
  overflow: hidden;
`;

const Header = styled.div`
  display: grid;
  margin: 0 ${doSpacing(2)};
  grid-template-columns: 1fr;
  font-size: 4.5rem;
  // overflow: auto;
  max-height: 100vh;

  ${MediaQuery.md},${MediaQuery.lg} {
    animation: nudge 5s linear infinite alternate;
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

  // background-color: red;
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
      // background-color: red;
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
      // background-color: yellow;
    }
  }

  // Animation end
`;

const Page = styled.div`
  position: absolute;
  height: 100%;
  width: 100vw;
  display: grid;
  place-items: center;
  padding: ${doSpacing(6)} ${doSpacing(1)};
  overflow-y: auto;
`;

const Body = styled.div`
  display: grid;
  grid-row-gap: ${doSpacing(4)};
  height: min-content;
  width: 100%;
  z-index: 1;
  overflow: hidden;

  ${MediaQuery.md} {
    width: 800px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr 32px;
  padding: ${doSpacing(4)};
  background-color: rgba(33, 33, 32, 0.65);
  backdrop-filter: blur(5px);
  border: 0.1rem solid black;
  border-radius: 16px;
  overflow-y: none;

  .content-title {
    z-index: 2;
    text-decoration: underline;
    background: linear-gradient(45deg, #2ebf91, #8360c3);
    font-family: 'Dancing Script';
    font-size: 3rem;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .content-text {
    color: white;
    z-index: 9999999;
    padding: ${doSpacing(2)};
    font-size: 1rem;
    font-family: 'Ubuntu';
  }

  .tags {
    ::before {
      content: '#';
    }
    color: #398dba;
    font-size: 1.5rem;
    text-decoration: unset;
    font-family: 'Dancing Script';
  }
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

export const TILHome = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Title> Today </Title>
          <Title className="second"> I </Title>
          <Title> Learned </Title>
        </Header>
      </Container>

      <Page>
        <Body>
          <Content>
            <div>
              <h2 className="content-title">The 'g' key in vim</h2>
              <p className="content-text">
                when you press <code>gv</code>, vim takes you to the last place
                where visual mode was active.
                <br />
                when you press <code>gi</code>, vim takes you to the place where
                insert mode was last active.
                <br />
                when you press <code>gi</code>, vim takes you to the place where
                insert mode was last active.
                <br />
                when you press <code>gi</code>, vim takes you to the place where
                insert mode was last active.
                <br />
                when you press <code>gi</code>, vim takes you to the place where
                insert mode was last active.
              </p>
            </div>
            <FlexBox>
              <p className="tags">vim</p>
              <FlexBox justify="flex-end" gap={2}>
                <FaGithub color="green" />
                <FaLinkedin color="blue" />
              </FlexBox>
            </FlexBox>
          </Content>

          <Content>
            <div>
              <h2 className="content-title">The 'g' key in vim</h2>
              <p className="content-text">
                when you press <code>gv</code>, vim takes you to the last place
                where visual mode was active.
                <br />
                when you press <code>gi</code>, vim takes you to the place where
                insert mode was last active.
                <br />
                when you press <code>gi</code>, vim takes you to the place where
                insert mode was last active.
                <br />
                when you press <code>gi</code>, vim takes you to the place where
                insert mode was last active.
                <br />
                when you press <code>gi</code>, vim takes you to the place where
                insert mode was last active.
              </p>
            </div>
            <FlexBox>
              <Link className="tags" to="/vim">
                vim
              </Link>
              <FlexBox justify="flex-end" gap={2}>
                <FaGithub color="green" />
                <FaLinkedin color="blue" />
              </FlexBox>
            </FlexBox>
          </Content>
        </Body>
      </Page>
    </Wrapper>
  );
};
