import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createStore, applyMiddleware} from 'redux';
import {provider} from 'react-redux';
import logger from 'redux-logger';
import myReducer from './redux/reducers';
import createSagaMiddleware from 'redux-saga';
import mySaga from './redux/sagas';
import { Provider } from 'react-redux';

const sagaMiddleware = createSagaMiddleware();
const myStore = createStore(
  myReducer,
  applyMiddleware(...[sagaMiddleware,logger])
)
sagaMiddleware.run(mySaga)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>

    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
