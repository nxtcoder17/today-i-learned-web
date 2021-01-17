import { StoreProvider } from 'easy-peasy';
import React, { Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { TILModule } from '#modules/til';
import theme from '#commons/theme';
import { LoadingIndicator } from '#commons/components/loading-indicator';
import store from './store';

const Root = styled.div`
  height: 100%;
  background: #e1ebe4;
  display: grid;
`;

// INFO: Only export Routes to Modules from App, make modules handle their internal routes
export default () => {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider store={store}>
        <Root>
          <Suspense fallback={<LoadingIndicator when />}>
            <BrowserRouter>
              <Route exact path="/" component={TILModule} />
            </BrowserRouter>
          </Suspense>
        </Root>
      </StoreProvider>
    </ThemeProvider>
  );
};
