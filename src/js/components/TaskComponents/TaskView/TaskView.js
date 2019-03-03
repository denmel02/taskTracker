import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {TASK_STATUSES} from '../../../constants';
import TaskShortView from './TaskShortView';
import TaskDetailView from './TaskDetailView';

const TaskView = (props) => {
    const {isShortView, ...rest} = props;

    if (isShortView) {
        return (
            <TaskShortView {...rest} />
        );
    }

    return (
        <TaskDetailView {...rest} />
    );
};

TaskView.propTypes = {
    className: PropTypes.string,
    task: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        status: PropTypes.oneOf(TASK_STATUSES),
        plannedTime: PropTypes.number,
        spentTime: PropTypes.number
    }).isRequired,
    isShortView: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    componentRef: PropTypes.shape({current: PropTypes.instanceOf(Element)})
};

TaskView.defaultProps = {
    className: '',
    componentRef: null
};

export default memo(TaskView);
