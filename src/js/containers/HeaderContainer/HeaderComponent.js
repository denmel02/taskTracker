import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {injectIntl, intlShape} from 'react-intl';
import cx from 'classnames';
import {KINDS_OF_TABLE} from '../../constants';
import {Button} from '../../components/CommonComponents';
import theme from './theme.scss';

const HeaderComponent = (props) => {
    const {intl: {formatMessage}, kindOfTable, onChangeKindOfTable, onLogout} = props;

    return (
        <div className={cx('box-row space-between flex-auto', theme.header)}>
            <div className={cx('box-row auto-width')}>
                {KINDS_OF_TABLE.map((kind) => {
                    const isKindSelected = kind === kindOfTable;

                    return (
                        <Button
                            key={kind}
                            className={cx(theme.kind)}
                            onClick={isKindSelected ? null : () => onChangeKindOfTable(kind)}
                            primary={isKindSelected}
                            raised={isKindSelected}
                        >
                            {formatMessage({id: kind})}
                        </Button>
                    );
                })}
            </div>
            <Button onClick={onLogout}>
                {formatMessage({id: 'logout'})}
            </Button>
        </div>
    );
};

HeaderComponent.propTypes = {
    intl: intlShape.isRequired,
    kindOfTable: PropTypes.oneOf(KINDS_OF_TABLE).isRequired,
    onChangeKindOfTable: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired
};

export {HeaderComponent};
export default injectIntl(memo(HeaderComponent));
