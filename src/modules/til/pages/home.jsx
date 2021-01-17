import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { fromPalette, doSpacing } from '#commons/styled-components-util';
import { MediaQuery } from '#commons/media-query';
import { FlexBox } from '#commons/components/flex-box';

const Wrapper = styled.div`
  height: 100%;
  overflow: none;
  background: ${fromPalette('background')};
  display: grid;
  place-items: center;
`;

const Container = styled.div`
  display: grid;
  z-index: 1;
`;

const Header = styled.div`
  display: grid;
  margin: 0 ${doSpacing(2)};
  grid-template-columns: 1fr;
  font-size: 4.5rem;
  overflow: none;
  max-height: 100vh;

  ${MediaQuery.md},${MediaQuery.lg} {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: ${doSpacing(12)};

    ${MediaQuery.md} {
      font-size: 5rem;
    }

    ${MediaQuery.lg} {
      font-size: 6rem;
    }
  }
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
  border: 0.1rem solid black;
  border-radius: 16px;
  overflow-y: none;

  .content-title {
    color: #39ba66;
  }
  .content-text {
    color: white;
    padding: ${doSpacing(2)};
    font-family: 'Montserrat';
    font-size: 1rem;
    font-weight: 600;
  }

  .tags {
    color: #398dba;
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
              <p className="tags"> #vim</p>
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
              <p className="tags"> #vim</p>
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
