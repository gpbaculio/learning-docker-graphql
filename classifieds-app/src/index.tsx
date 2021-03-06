import React from 'react';
import { ApolloProvider } from 'react-apollo'
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';

import * as theme from './theme'
import store from './store'
import graphQLClient from './api/graphQLClient'

import * as serviceWorker from './serviceWorker';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap')
  html, body, #app {
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  body {
    font-family: Roboto, sans-serif;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={graphQLClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
