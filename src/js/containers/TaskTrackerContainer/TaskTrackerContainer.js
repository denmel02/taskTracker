import React from 'react';
import cx from 'classnames';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import HeaderContainer from '../HeaderContainer';
import TaskTableContainer from '../TaskTableContainer';
import theme from './theme.scss';

const TaskTrackerContainer = () => (
    <div className={cx('box-col ', theme.container)} >
        <HeaderContainer />
        <TaskTableContainer />
    </div>
);

export default DragDropContext(HTML5Backend)(TaskTrackerContainer);
