import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {injectIntl, intlShape} from 'react-intl';
import cx from 'classnames';
import {LoginButton, LoginTextField} from '../../components/LoginComponents';
import theme from './theme.scss';

const LoginComponent = (props) => {
    const {intl: {formatMessage}, email, password, errorKeys, onChange, onLogin} = props;
    const disabled = !!errorKeys.email || !!errorKeys.password;

    return (
        <div className={cx('box-row align-middle', theme.login)}>
            <div className={cx('box-col align-center', theme.content)}>
                <span className={cx(theme.title)}>{formatMessage({id: 'authorization'})}</span>
                <LoginTextField
                    type="email"
                    value={email}
                    errorKey={errorKeys.email}
                    onChange={(value) => onChange('email', value)}
                />
                <LoginTextField
                    type="password"
                    value={password}
                    errorKey={errorKeys.password}
                    onChange={(value) => onChange('password', value)}
                />
                <LoginButton className={cx(theme.button)} disabled={disabled} onClick={onLogin} />
            </div>
        </div>
    );
};

LoginComponent.propTypes = {
    intl: intlShape.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    errorKeys: PropTypes.shape({
        email: PropTypes.string,
        password: PropTypes.string
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired
};

export {LoginComponent};
export default injectIntl(memo(LoginComponent));
