import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {injectIntl, intlShape} from 'react-intl';
import cx from 'classnames';
import {TASK_STATUSES} from '../../../../constants';
import {DragComponent} from '../../../CommonComponents';
import TaskView from '../../TaskView';
import theme from './theme.scss';

const DragTaskView = DragComponent(TaskView);

const TaskScrumCol = (props) => {
    const {intl: {formatMessage}, className, status, tasks, onClick, componentRef} = props;

    return (
        <div className={cx('box-col', className, theme.col)} ref={componentRef}>
            <div className={cx(theme.header, theme[status])}>
                <span className={cx(theme.title)}>{formatMessage({id: status})}</span>
            </div>
            <div className={cx('box-row width-overflow', theme.content)}>
                {tasks.map((task) => (
                    <DragTaskView
                        key={task.id}
                        className={cx(theme.task)}
                        task={task}
                        onClick={() => onClick(task.id)}
                        isShortView
                        canDrag
                        dragProps={{taskId: task.id, status}}
                    />
                ))}
            </div>
        </div>
    );
};

TaskScrumCol.propTypes = {
    intl: intlShape.isRequired,
    className: PropTypes.string,
    status: PropTypes.oneOf(TASK_STATUSES).isRequired,
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClick: PropTypes.func.isRequired,
    componentRef: PropTypes.shape({current: PropTypes.instanceOf(Element)})
};

TaskScrumCol.defaultProps = {
    className: '',
    componentRef: null
};

export {TaskScrumCol};
export default injectIntl(memo(TaskScrumCol));
