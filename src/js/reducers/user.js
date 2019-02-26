import {LOGIN_SUCCESS, LOGOUT} from '../constants';

const initialState = {isLoginSuccess: false};

export default (state = initialState, action) => {
    switch (action.type) {
    case LOGIN_SUCCESS:
        return {isLoginSuccess: true};
    case LOGOUT:
        return {isLoginSuccess: false};
    default:
        return state;
    }
};
