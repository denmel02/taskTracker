import React, {memo} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import TaskTableScrumContent from './TaskTableScrumContent';
import TaskTableScrumHeader from './TaskTableScrumHeader';

const TaskScrumTable = (props) => {
    const {onDrop, ...rest} = props;

    return (
        <div className={cx('box-col nowrap width-overflow')}>
            <TaskTableScrumHeader onDrop={onDrop} />
            <TaskTableScrumContent {...rest} onDrop={onDrop} />
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
    onDrop: PropTypes.func.isRequired,
    onDragStart: PropTypes.func.isRequired
};

export default memo(TaskScrumTable);
