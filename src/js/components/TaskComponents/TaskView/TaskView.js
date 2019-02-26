import React, {memo} from 'react';
import PropTypes from 'prop-types';
import TaskShortView from './TaskShortView';
import TaskDetailView from './TaskDetailView';

const TaskView = (props) => {
    const {isShortView, draggable, onDragStart, ...rest} = props;

    if (isShortView) {
        return (
            <TaskShortView {...rest} draggable={draggable} onDragStart={onDragStart} />
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
        status: PropTypes.oneOf(['new', 'processed', 'finished']),
        plannedTime: PropTypes.number,
        spentTime: PropTypes.number
    }).isRequired,
    isShortView: PropTypes.bool.isRequired,
    draggable: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    onDragStart: PropTypes.func
};

TaskView.defaultProps = {
    className: '',
    draggable: false,
    onDragStart: null
};

export default memo(TaskView);
