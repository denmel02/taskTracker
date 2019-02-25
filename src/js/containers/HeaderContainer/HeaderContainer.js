import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {KINDS_OF_TABLE} from '../../constants';
import {headerContainerSelector} from '../../selectors';
import {changeKindOfTable, logout} from '../../actions';
import HeaderComponent from './HeaderComponent';

export class HeaderContainer extends PureComponent {
    propTypes = {
        kindOfTable: PropTypes.oneOf(KINDS_OF_TABLE).isRequired,
        changeKindOfTable: PropTypes.func.isRequired,
        logout: PropTypes.func.isRequired
    };

    render = () => {
        const {kindOfTable, changeKindOfTable, logout} = this.props;

        return (
            <HeaderComponent kindOfTable={kindOfTable} onChangeKindOfTable={changeKindOfTable} onLogout={logout} />
        );
    };
}

export default connect(headerContainerSelector(), {changeKindOfTable, logout})(HeaderContainer);

