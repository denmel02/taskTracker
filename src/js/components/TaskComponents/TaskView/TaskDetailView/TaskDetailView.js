import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {injectIntl, intlShape} from 'react-intl';
import cx from 'classnames';
import theme from './theme.scss';

const TaskDetailView = (props) => {
    const {intl: {formatMessage}, className, task, ...rest} = props;
    const {title, description, status, plannedTime, spentTime} = task;

    return (
        <div className={cx('box-col nowrap no-overflow pointer', className, theme.view, theme[status])} {...rest}>
            <span className={cx('nowrap-overflow', theme.title)}>{title || formatMessage({id: 'withoutName'})}</span>
            <span className={cx(theme.description)}>{description || formatMessage({id: 'description'})}</span>
            <div className={cx('box-row nowrap')}>
                <span className={cx('nowrap-overflow', theme.time)}>
                    {plannedTime || formatMessage({id: 'plannedTime'})}
                </span>
                <span className={cx('nowrap-overflow')}>{spentTime || formatMessage({id: 'spentTime'})}</span>
            </div>
        </div>
    );
};

TaskDetailView.propTypes = {
    intl: intlShape.isRequired,
    className: PropTypes.string,
    task: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        status: PropTypes.oneOf(['new', 'processed', 'finished']),
        plannedTime: PropTypes.number,
        spentTime: PropTypes.number
    }).isRequired,
    onClick: PropTypes.func.isRequired
};

TaskDetailView.defaultProps = {
    className: ''
};

export {TaskDetailView};
export default injectIntl(memo(TaskDetailView));
