import {createSelector} from 'reselect';

export const commonSelector = (type) => (state) => state[type];

export const deepCommonSelector = (type, key) => (state) => state[type][key];

export const commonArraySelector = (type) =>
    createSelector([commonSelector(type)], (common) => Object.keys(common).map((id) => common[id]));
