// react
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

// components
import App from './components/App.jsx';

// redux
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

// reducers
import reducers from './reducers/index';

const middleware = [thunk];
const devMiddleware = [logger];
const store = createStore(
  reducers,
  applyMiddleware(...[...middleware, ...devMiddleware])
);

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );

render(App);

// Webpack Hot Module Replacement API
if (module.hot) module.hot.accept('./components/App.jsx', () => render(App));
