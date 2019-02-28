import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import intl from './intl';
import settings from './settings';
import tasks from './tasks';
import user from './user';

export const createReducers = (history) => combineReducers({
    router: connectRouter(history),
    intl,
    settings,
    tasks,
    user
});
