import React from 'react';
import cx from 'classnames';
import HeaderContainer from '../HeaderContainer';
import TaskTableContainer from '../TaskTableContainer';
import theme from './theme.scss';

const TaskTrackerContainer = () => (
    <div className={cx('box-col ', theme.container)} >
        <HeaderContainer />
        <TaskTableContainer />
    </div>
);

export default TaskTrackerContainer;
