import {LOGIN} from '../constants';

export const login = (email, password) => ({
    type: LOGIN,
    payload: {email, password}
});
