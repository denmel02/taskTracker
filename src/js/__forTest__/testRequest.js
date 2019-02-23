import {LOGIN, LOGOUT, FETCH_TASKS, UPDATE_TASK} from '../constants';

const user = {email: 'user@gmail.com', password: 'q123456'};

let tasks = {
    taskId1: {title: 'title1', description: 'description1', status: 'new', plannedTime: 84000, spentTime: 84000},
    taskId2: {title: 'title2', description: 'description2', status: 'new', plannedTime: 90000},
    taskId3: {title: 'title3', description: '', status: 'processed', spentTime: 80000},
    taskId4: {title: 'title4 title4 title4 title4 title4 title4 title4', description: '', status: 'processed'},
    taskId5: {title: '', description: 'description5 description5 description5 description5 description5 description5 description5', status: 'finished'},
    taskId6: {title: '', description: 'description6', status: 'finished'}
};

const loginRequest = (config) => {
    const {data: {email, password}} = config;

    if (email !== user.email) {
        return Promise.reject(['suchUserIsNotRegistered']);
    }

    if (password !== user.password) {
        return Promise.reject(['wrongPassword']);
    }

    return Promise.resolve({});
};

const logoutRequest = () => Promise.resolve({});

const fetchRequest = () => Promise.resolve({result: tasks});

const updateRequest = (config) => {
    const {endpoint, data} = config;
    const taskId = endpoint.split('/')[2];

    tasks = {
        ...tasks,
        [taskId]: {
            ...tasks[taskId],
            ...data
        }
    };

    return Promise.resolve({result: tasks[taskId]});
};

export default (payload) => {
    const {types, config} = payload;

    switch (types.request) {
    case LOGIN:
        return loginRequest(config);
    case LOGOUT:
        return logoutRequest();
    case FETCH_TASKS:
        return fetchRequest();
    case UPDATE_TASK:
        return updateRequest(config);
    default:
        return Promise.reject();
    }
};
