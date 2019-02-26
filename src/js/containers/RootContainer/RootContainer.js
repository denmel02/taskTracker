import React from 'react';
import {Provider} from 'react-redux';
import store from '../../store';
import IntlContainer from '../IntlContainer';
import MainContainer from '../MainContainer';

const RootContainer = () => (
    <Provider store={store} >
        <IntlContainer>
            <MainContainer />
        </IntlContainer>
    </Provider>
);

export default RootContainer;
