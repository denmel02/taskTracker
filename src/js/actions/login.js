import {CALL_API, POST, LOGIN} from '../constants';
import {getActionTypes} from '../utils';

export const login = (email, password) => ({
    type: CALL_API,
    payload: {
        types: getActionTypes(LOGIN),
        config: {
            method: POST,
            endpoint: '/login',
            data: {email, password}
        }
    }
});
