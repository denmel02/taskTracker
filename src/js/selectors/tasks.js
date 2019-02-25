import {createSelector} from 'reselect';
import {SCRUM_TABLE} from '../constants';
import {groupBy} from '../utils';
import {commonArraySelector, deepCommonSelector} from './common';

export const taskTableContainerSelector = () => createSelector(
    [commonArraySelector('tasks'), deepCommonSelector('settings', 'kindOfTable')],
    (tasks, kindOfTable) => ({
        tasks: kindOfTable === SCRUM_TABLE ? groupBy(tasks, 'status') : tasks,
        kindOfTable
    })
);
