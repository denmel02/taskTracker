import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchTasks, updateTask} from '../../actions';
import {KINDS_OF_TABLE} from '../../constants';
import {taskTableContainerSelector} from '../../selectors';
import TaskTableComponent from './TaskTableComponent';

export class TaskTableContainer extends PureComponent {
    static propTypes = {
        tasks: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.object),
            PropTypes.shape({
                new: PropTypes.arrayOf(PropTypes.object),
                processed: PropTypes.arrayOf(PropTypes.object),
                finished: PropTypes.arrayOf(PropTypes.object)
            })
        ]).isRequired,
        kindOfTable: PropTypes.oneOf(KINDS_OF_TABLE).isRequired,
        fetchTasks: PropTypes.func.isRequired,
        updateTask: PropTypes.func.isRequired
    };

    componentDidMount = () => {
        this.props.fetchTasks();
    };

    render = () => {
        const {tasks, kindOfTable} = this.props;

        return (
            <TaskTableComponent
                tasks={tasks}
                kindOfTable={kindOfTable}
                onClick={this.handleClick}
                onDrop={this.handleDrop}
            />
        );
    };

    handleClick = (taskId) => alert(`push to /tasks/${taskId}`);

    handleDrop = (status, {dragProps = {}}) => {
        const {taskId, status: oldStatus} = dragProps;

        if (!oldStatus || oldStatus === status) {
            return;
        }

        if (taskId) {
            this.props.updateTask(taskId, {status});
        }
    };
}

export default connect(taskTableContainerSelector(), {fetchTasks, updateTask})(TaskTableContainer);
