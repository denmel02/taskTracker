import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {IntlProvider} from 'react-intl';

const IntlComponent = (props) => {
    const {locale, messages, children} = props;

    return (
        <IntlProvider locale={locale} messages={messages} >
            {children}
        </IntlProvider>
    );
};

IntlComponent.propTypes = {
    locale: PropTypes.string.isRequired,
    messages: PropTypes.objectOf(PropTypes.string).isRequired,
    children: PropTypes.node.isRequired
};

export default memo(IntlComponent);
