import React, {memo} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import TaskView from '../../TaskView';
import theme from './theme.scss';

const TaskTableScrumContent = (props) => {
    const {tasks, onClick, onDragStart, onDrop} = props;

    return (
        <div className={cx('box-row nowrap width-overflow')}>
            {['new', 'processed', 'finished'].map((status) => (
                <div key={status} className={cx('box-row width-overflow', theme.col)} onDrop={(event) => onDrop(event, status)}>
                    {tasks[status].map((task) => (
                        <TaskView
                            key={task.id}
                            className={cx(theme.task)}
                            task={task}
                            onClick={() => onClick(task.id)}
                            onDragStart={(event) => onDragStart(event, task.id)}
                            isShortView
                            draggable
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

TaskTableScrumContent.propTypes = {
    tasks: PropTypes.shape({
        new: PropTypes.arrayOf(PropTypes.object),
        processed: PropTypes.arrayOf(PropTypes.object),
        finished: PropTypes.arrayOf(PropTypes.object)
    }).isRequired,
    onClick: PropTypes.func.isRequired,
    onDrop: PropTypes.func.isRequired,
    onDragStart: PropTypes.func.isRequired
};

export default memo(TaskTableScrumContent);
