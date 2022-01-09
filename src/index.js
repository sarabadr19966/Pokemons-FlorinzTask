import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/App';
import pokemonReducer from './state/reducers/pokemon-reducer';

const middleware = [thunk];

const store = createStore(
  pokemonReducer,
  composeWithDevTools(
    applyMiddleware(...middleware),
  ),
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
