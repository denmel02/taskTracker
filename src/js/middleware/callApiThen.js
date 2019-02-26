export default (store, payload) => (response) => {
    const {types, meta = {}} = payload;
    const {result, errors} = response;

    if (!!errors && errors.length !== 0) {
        return store.dispatch({
            type: types.error,
            payload: {meta, errors, result}
        });
    }

    return store.dispatch({
        type: types.success,
        payload: {meta, result}
    });
};
