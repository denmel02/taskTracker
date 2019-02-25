import {createSelector} from 'reselect';
import {deepCommonSelector} from './common';

export const mainContainerSelector = () =>
    createSelector([deepCommonSelector('user', 'isLoginSuccess')], (isLoginSuccess) => ({isLoginSuccess}));
