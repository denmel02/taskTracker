import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import {history, store} from '../../storeConfig';
import IntlContainer from '../IntlContainer';
import RoutesContainer from '../RoutesContainer';

const RootContainer = () => (
    <Provider store={store}>
        <IntlContainer>
            <ConnectedRouter history={history}>
                <RoutesContainer />
            </ConnectedRouter>
        </IntlContainer>
    </Provider>
);

export default RootContainer;
