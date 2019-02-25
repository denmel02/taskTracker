import {createSelector} from 'reselect';
import locales from '../locales';
import {deepCommonSelector} from './common';

export const intlContainerSelector = () => createSelector([deepCommonSelector('intl', 'locale')], (locale) => ({
    locale,
    messages: locales[locale]
}));
