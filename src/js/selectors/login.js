import {createSelector} from 'reselect';
import {deepCommonSelector} from './common';

export const loginContainerSelector = () => createSelector(
    [deepCommonSelector('user', 'isLoginSuccess')],
    (isLoginSuccess) => ({isLoginSuccess})
);
