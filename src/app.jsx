import React, { Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { LoadingIndicator } from '#commons/components/loading-indicator';
import theme from '#commons/theme';
import { TILModule } from '#modules/til';

const Root = styled.div`
  height: 100%;
  background: #e1ebe4;
  display: grid;
`;

// INFO: Only export Routes to Modules from App, make modules handle their internal routes
export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <Suspense fallback={<LoadingIndicator when />}>
          <BrowserRouter>
            <Route path="/" component={TILModule} />
          </BrowserRouter>
        </Suspense>
      </Root>
    </ThemeProvider>
  );
};
