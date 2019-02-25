import {CHANGE_KIND_OF_TABLE, SHORT_TABLE} from '../constants';

const initialState = {kindOfTable: SHORT_TABLE};

export default (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
    case CHANGE_KIND_OF_TABLE:
        return {kindOfTable: payload};
    default:
        return state;
    }
};
