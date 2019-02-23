import {CALL_API, GET, POST, PATCH, DELETE, FETCH_TASKS, CREATE_TASK, UPDATE_TASK, REMOVE_TASK} from '../constants';
import {getActionTypes} from '../utils';

export const fetchTasks = () => ({
    type: CALL_API,
    payload: {
        types: getActionTypes(FETCH_TASKS),
        config: {
            method: GET,
            endpoint: '/tasks'
        }
    }
});

export const createTask = () => ({
    type: CALL_API,
    payload: {
        types: getActionTypes(CREATE_TASK),
        config: {
            method: POST,
            endpoint: '/tasks/new'
        }
    }
});

export const updateTask = (taskId, data) => ({
    type: CALL_API,
    payload: {
        types: getActionTypes(UPDATE_TASK),
        config: {
            method: PATCH,
            endpoint: `/tasks/${taskId}`,
            data
        },
        meta: {taskId, data}
    }
});

export const removeTask = (taskId) => ({
    type: CALL_API,
    payload: {
        types: getActionTypes(REMOVE_TASK),
        config: {
            method: DELETE,
            endpoint: `/tasks/${taskId}`
        },
        meta: {taskId}
    }
});
