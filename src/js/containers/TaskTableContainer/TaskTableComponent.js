import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {SHORT_TABLE, SCRUM_TABLE, KINDS_OF_TABLE} from '../../constants';
import {TaskTable, TaskScrumTable} from '../../components/TaskComponents';

const TaskTableComponent = (props) => {
    const {tasks, kindOfTable, onClick, ...rest} = props;

    if (kindOfTable === SCRUM_TABLE) {
        return (
            <TaskScrumTable {...rest} tasks={tasks} onClick={onClick} />
        );
    }

    return (
        <TaskTable tasks={tasks} isShortView={kindOfTable === SHORT_TABLE} onClick={onClick} />
    );
};

TaskTableComponent.propTypes = {
    tasks: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.object),
        PropTypes.shape({
            new: PropTypes.arrayOf(PropTypes.object),
            processed: PropTypes.arrayOf(PropTypes.object),
            finished: PropTypes.arrayOf(PropTypes.object)
        })
    ]).isRequired,
    kindOfTable: PropTypes.oneOf(KINDS_OF_TABLE).isRequired,
    onClick: PropTypes.func.isRequired,
    onDrop: PropTypes.func.isRequired
};

export default memo(TaskTableComponent);
