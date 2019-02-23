import sendRequest from './sendRequest';
import callApiThen from './callApiThen';
import callApiCatch from './callApiCatch';

export default (store, payload, callback) => {
    const {types, meta = {}} = payload;

    callback();
    store.dispatch({
        type: types.request,
        payload: {meta}
    });

    return sendRequest(payload)
        .then(callApiThen(store, payload))
        .catch(callApiCatch(store, payload));
};
