import React from 'react';
import styled from 'styled-components';
import { doSpacing, fromPalette } from '#commons/styled-components-util';
import { BackgroundElement } from './background-element';

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
  z-index: 2;
  width: min(800px, 100%);
`;

const PageWrapper = ({ children }) => {
  return (
    <Wrapper>
      <BackgroundElement />
      <Page>
        <Body>{children}</Body>
      </Page>
    </Wrapper>
  );
};

export default PageWrapper;
