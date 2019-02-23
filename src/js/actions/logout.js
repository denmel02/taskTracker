import {CALL_API, POST, LOGOUT} from '../constants';
import {getActionTypes} from '../utils';

export const logout = () => ({
    type: CALL_API,
    payload: {
        types: getActionTypes(LOGOUT),
        config: {
            method: POST,
            endpoint: '/logout'
        }
    }
});
