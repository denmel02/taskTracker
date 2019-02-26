import {combineReducers} from 'redux';
import intl from './intl';
import settings from './settings';
import tasks from './tasks';
import user from './user';

export default combineReducers({
    intl,
    settings,
    tasks,
    user
});
