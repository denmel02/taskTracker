
import {createStore, applyMiddleware} from 'redux';
import middleware from '../middleware';
import reducers from '../reducers';

const getStoreEnhancer = () => applyMiddleware(middleware);

const store = createStore(reducers, getStoreEnhancer());

export default store;
