import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {injectIntl, intlShape} from 'react-intl';
import cx from 'classnames';
import {TASK_STATUSES} from '../../../../constants';
import theme from './theme.scss';

const TaskShortView = (props) => {
    const {intl: {formatMessage}, className, task: {title, status}, componentRef, ...rest} = props;

    return (
        <div
            ref={componentRef}
            className={cx('nowrap no-overflow pointer', className, theme.view, theme[status])}
            {...rest}
        >
            <span className={cx(theme.title)}>{title || formatMessage({id: 'withoutName'})}</span>
        </div>
    );
};

TaskShortView.propTypes = {
    intl: intlShape.isRequired,
    className: PropTypes.string,
    task: PropTypes.shape({
        title: PropTypes.string,
        status: PropTypes.oneOf(TASK_STATUSES)
    }).isRequired,
    onClick: PropTypes.func.isRequired,
    componentRef: PropTypes.shape({current: PropTypes.instanceOf(Element)})
};

TaskShortView.defaultProps = {
    className: '',
    componentRef: null
};

export {TaskShortView};
export default injectIntl(memo(TaskShortView));
