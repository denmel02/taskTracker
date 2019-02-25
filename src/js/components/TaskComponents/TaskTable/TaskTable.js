import React, {memo} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import TaskView from '../TaskView';
import theme from './theme.scss';

const TaskTable = (props) => {
    const {tasks, isShortView, onClick} = props;

    return (
        <div className={cx('width-overflow', isShortView ? 'box-row' : 'box-col')}>
            {tasks.map((task) => (
                <TaskView
                    key={task.id}
                    className={cx(theme.task, isShortView && theme.short)}
                    task={task}
                    isShortView={isShortView}
                    onClick={() => onClick(task.id)}
                />
            ))}
        </div>
    );
};

TaskTable.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    isShortView: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default memo(TaskTable);
