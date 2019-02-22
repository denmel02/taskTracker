import {createSelector} from 'reselect';
import locales from '../locales';

export const intlSelector = (state) => state.intl;

export const intlContainerSelector = () => createSelector([intlSelector], (intl) => ({
    locale: intl.locale,
    messages: locales[intl.locale]
}));
