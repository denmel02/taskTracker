import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {injectIntl, intlShape} from 'react-intl';
import cx from 'classnames';
import {LOGIN_FIELD_TYPES} from '../../../constants';
import {TextField} from '../../CommonComponents';
import theme from './theme.scss';

const LoginTextField = (props) => {
    const {intl: {formatMessage}, className, type, errorKey, ...restProps} = props;
    const {labelKey, ...restFieldType} = LOGIN_FIELD_TYPES[type];

    return (
        <TextField
            {...restProps}
            {...restFieldType}
            className={cx(className, theme.field)}
            label={formatMessage({id: labelKey})}
            error={!!errorKey && formatMessage({id: errorKey})}
        />
    );
};

LoginTextField.propTypes = {
    intl: intlShape.isRequired,
    className: PropTypes.string,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    errorKey: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

LoginTextField.defaultProps = {
    className: ''
};

export {LoginTextField};
export default injectIntl(memo(LoginTextField));
