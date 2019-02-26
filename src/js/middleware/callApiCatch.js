export default (store, payload) => (errors) => {
    const {types, meta = {}} = payload;

    store.dispatch({
        type: types.error,
        payload: {meta, errors}
    });

    throw errors;
};
