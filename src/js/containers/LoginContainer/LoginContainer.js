import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {isFieldValid} from '../../utils';
import LoginComponent from './LoginComponent';

export class LoginContainer extends PureComponent {
    static propTypes = {
        login: PropTypes.func
    };

    state = {
        email: '',
        password: '',
        errorKeys: {
            email: '',
            password: ''
        }
    };

    render = () => (
        <LoginComponent
            {...this.state}
            onChange={this.handleChange}
            onLogin={this.handleLogin}
        />
    );

    handleChange = (key, value) => this.setState({[key]: value});

    handleCheckLoginDisable = () => !!this.state.errorKeys.email && !!this.state.errorKeys.password;

    handleLogin = () => {

    }
}

export default LoginContainer;
