import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/main.scss';
import registerServiceWorker from './registerServiceWorker';
import {combineReducers, createStore, compose, applyMiddleware} from  'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import errorsReducer from './reducers/errorsReducer';
import postsReducer from './reducers/postsReducer';
import {Provider} from 'react-redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth : authReducer,
  errors:errorsReducer,
  posts:postsReducer,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


ReactDOM.render(
    <Provider store={store}><App/></Provider>
    , document.getElementById('root'));
registerServiceWorker();
