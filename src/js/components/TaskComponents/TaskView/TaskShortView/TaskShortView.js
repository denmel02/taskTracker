import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {injectIntl, intlShape} from 'react-intl';
import cx from 'classnames';
import theme from './theme.scss';

const TaskShortView = (props) => {
    const {intl: {formatMessage}, className, task: {title, status}, ...rest} = props;

    return (
        <div className={cx('nowrap no-overflow pointer', className, theme.view, theme[status])} {...rest}>
            <span className={cx(theme.title)}>{title || formatMessage({id: 'withoutName'})}</span>
        </div>
    );
};

TaskShortView.propTypes = {
    intl: intlShape.isRequired,
    className: PropTypes.string,
    task: PropTypes.shape({
        title: PropTypes.string,
        status: PropTypes.oneOf(['new', 'processed', 'finished'])
    }).isRequired,
    draggable: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    onDragStart: PropTypes.func
};

TaskShortView.defaultProps = {
    className: '',
    draggable: false,
    onDragStart: null
};

export {TaskShortView};
export default injectIntl(memo(TaskShortView));
