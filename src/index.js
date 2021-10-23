import './index.css';

import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux' 
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import mangasReducer from './reducers/mangasReducer'
import genresReducer from './reducers/genresReducer'

const rootReducer = combineReducers({
  mangas: mangasReducer,
  genres: genresReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
