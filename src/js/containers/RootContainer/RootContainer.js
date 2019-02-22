import React from 'react';
import {Provider} from 'react-redux';
import store from '../../store';
import IntlContainer from '../IntlContainer';
import LoginContainer from '../LoginContainer';

const RootContainer = () => (
    <Provider store={store} >
        <IntlContainer>
            <LoginContainer />
        </IntlContainer>
    </Provider>
);

export default RootContainer;
