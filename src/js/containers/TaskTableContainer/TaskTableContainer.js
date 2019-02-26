import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchTasks, updateTask} from '../../actions';
import {KINDS_OF_TABLE} from '../../constants';
import {taskTableContainerSelector} from '../../selectors';
import TaskTableComponent from './TaskTableComponent';

export class TaskTableContainer extends PureComponent {
    propTypes = {
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
                onDragStart={this.handleDragStart}
                onDrop={this.handleDrop}
            />
        );
    };

    handleClick = (taskId) => alert(`push to /tasks/${taskId}`);

    handleDragStart = (event, taskId) => event.dataTransfer.setData('taskId', taskId);

    handleDrop = (event, status) => {
        const taskId = event.dataTransfer.getData('taskId');

        if (taskId) {
            this.props.updateTask(taskId, {status});
        }
    };
}

export default connect(taskTableContainerSelector(), {fetchTasks, updateTask})(TaskTableContainer);
