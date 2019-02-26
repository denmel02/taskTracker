import {CALL_API} from '../constants';
import callApi from './callApi';

export default (store) => (next) => (action) => {
    if (typeof action === 'function') {
        return next(action);
    }

    const {type, payload} = action;

    if (type !== CALL_API) {
        return next(action);
    }

    return callApi(store, payload, () => next(action));
};
