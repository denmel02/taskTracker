import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {injectIntl, intlShape} from 'react-intl';
import cx from 'classnames';
import {Button} from '../../CommonComponents';
import theme from './theme.scss';

const LoginButton = (props) => {
    const {intl: {formatMessage}, className, ...rest} = props;

    return (
        <Button {...rest} className={cx(className, theme.button)} raised primary>
            {formatMessage({id: 'login'})}
        </Button>
    );
};

LoginButton.propTypes = {
    intl: intlShape.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

LoginButton.defaultProps = {
    className: ''
};

export {LoginButton};
export default injectIntl(memo(LoginButton));