
import {createBrowserHistory} from 'history';
import {createStore, applyMiddleware} from 'redux';
import {routerMiddleware} from 'connected-react-router';
import {createReducers} from '../reducers';
import middleware from '../middleware';

const history = createBrowserHistory();

const getStoreEnhancer = () => applyMiddleware(routerMiddleware(history), middleware);

const store = createStore(createReducers(history), getStoreEnhancer());

export {history, store};
