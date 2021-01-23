import React from 'react';
import styled from 'styled-components';
import { doSpacing, fromPalette } from '#commons/styled-components-util';
import { BackgroundElement } from './background-element';
import { FlexBox } from '#commons/components/flex-box';

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

const ActionButton = styled.button`
  padding: ${doSpacing(2)};
  font-family: 'Acme';
  font-size: 1rem;
  background: transparent;
  border-radius: 15px;
  backdrop-filter: blur(4px);
  color: white;
`;

const PageWrapper = ({ prev, next, children }) => {
  return (
    <Wrapper>
      <BackgroundElement />
      <Page>
        <Body>
          {children}
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
        </Body>
      </Page>
    </Wrapper>
  );
};

export default PageWrapper;
