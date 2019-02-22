import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {initLocales} from '../../locales';
import {intlContainerSelector} from '../../selectors';
import IntlComponent from './IntlComponent';

initLocales();

export class IntlContainer extends PureComponent {
    static propTypes = {
        locale: PropTypes.string,
        messages: PropTypes.objectOf(PropTypes.string),
        children: PropTypes.node
    };

    static defaultProps = {
        locale: 'ru',
        messages: {},
        children: null
    };

    render = () => (<IntlComponent {...this.props} />);
}

export default connect(intlContainerSelector, null)(IntlContainer);
