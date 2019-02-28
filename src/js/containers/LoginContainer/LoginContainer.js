import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';
import {login} from '../../actions';
import {isFieldValid} from '../../utils';
import LoginComponent from './LoginComponent';

export class LoginContainer extends PureComponent {
    static propTypes = {
        login: PropTypes.func.isRequired,
        push: PropTypes.func.isRequired
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

    handleChange = (key, value) => this.setState((prevState) => ({
        [key]: value,
        errorKeys: {...prevState.errorKeys, [key]: ''}
    }));

    handleCheckLoginDisable = () => !!this.state.errorKeys.email && !!this.state.errorKeys.password;

    handleLogin = () => {
        if (this.handleCheckLoginDisable()) {
            return;
        }

        const {email, password} = this.state;

        if (!isFieldValid('email', email)) {
            this.setState((prevState) => ({errorKeys: {...prevState.errorKeys, email: 'invalidEmail'}}));

            return;
        }

        if (!isFieldValid('password', password)) {
            this.setState((prevState) => ({errorKeys: {...prevState.errorKeys, password: 'invalidPassword'}}));

            return;
        }

        const {login, push} = this.props;

        login(email, password)
            .then(() => push('/tasks'))
            .catch((errors) => {
                if (!errors || errors.length === 0) {
                    return;
                }

                const errorKey = errors[0];
                const fieldKey = errorKey === 'suchUserIsNotRegistered' ? 'email' : 'password';

                this.setState((prevState) => ({errorKeys: {...prevState.errorKeys, [fieldKey]: errorKey}}));
            });
    };
}

export default connect(null, {login, push})(LoginContainer);
