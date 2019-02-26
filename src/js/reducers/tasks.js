import {FETCH_TASKS_SUCCESS, UPDATE_TASK_SUCCESS} from '../constants';

const initialState = {};

export default (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
    case FETCH_TASKS_SUCCESS:
        return payload.result;
    case UPDATE_TASK_SUCCESS: {
        const {meta: {taskId}, result} = payload;

        return {
            ...state,
            [taskId]: result
        };
    }
    default:
        return state;
    }
};
