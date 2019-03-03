import React, {memo} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {TASK_STATUSES} from '../../../constants';
import {DropComponent} from '../../CommonComponents';
import TaskScrumCol from './TaskScrumCol';
import theme from './theme.scss';

const DropTaskScrumCol = DropComponent(TaskScrumCol);

const TaskScrumTable = (props) => {
    const {tasks, onClick, onDrop} = props;

    return (
        <div className={cx('box-row nowrap', theme.table)}>
            {TASK_STATUSES.map((status) => (
                <DropTaskScrumCol
                    key={status}
                    className={cx(theme.col)}
                    status={status}
                    tasks={tasks[status] || []}
                    onClick={onClick}
                    canDrop
                    onDrop={(item) => onDrop(status, item)}
                />
            ))}
        </div>
    );
};

TaskScrumTable.propTypes = {
    tasks: PropTypes.shape({
        new: PropTypes.arrayOf(PropTypes.object),
        processed: PropTypes.arrayOf(PropTypes.object),
        finished: PropTypes.arrayOf(PropTypes.object)
    }).isRequired,
    onClick: PropTypes.func.isRequired,
    onDrop: PropTypes.func.isRequired
};

export default memo(TaskScrumTable);
