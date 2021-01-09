import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// react-redux and redux imports
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// Logger and thunk will be implemented later.
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// Import root reducer
import rootReducer from './redux/reducers';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';


//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer
  //composeEnhancers(applyMiddleware(thunk, logger))
);



ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App/>
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();