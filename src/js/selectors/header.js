import {createSelector} from 'reselect';
import {deepCommonSelector} from './common';

export const headerContainerSelector = () =>
    createSelector([deepCommonSelector('settings', 'kindOfTable')], (kindOfTable) => ({kindOfTable}));
