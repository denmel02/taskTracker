import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {injectIntl, intlShape} from 'react-intl';
import cx from 'classnames';
import theme from './theme.scss';

const TaskTableScrumHeader = (props) => {
    const {intl: {formatMessage}, onDrop} = props;

    return (
        <div className={cx('box-row nowrap flex-auto', theme.header)}>
            {['new', 'processed', 'finished'].map((status) => (
                <div key={status} className={cx('width-overflow', theme.col, theme[status])} onDrop={(event) => onDrop(event, status)}>
                    <span className={cx(theme.title)}>{formatMessage({id: status})}</span>
                </div>
            ))}
        </div>
    );
};

TaskTableScrumHeader.propTypes = {
    intl: intlShape.isRequired,
    onDrop: PropTypes.func.isRequired
};

export {TaskTableScrumHeader};
export default injectIntl(memo(TaskTableScrumHeader));
