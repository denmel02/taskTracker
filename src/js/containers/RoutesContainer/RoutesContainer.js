import React from 'react';
import {Switch, Route, Redirect} from 'react-router';
import LoginContainer from '../LoginContainer';
import TaskTrackerContainer from '../TaskTrackerContainer';

const RoutesContainer = () => (
    <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/tasks" component={TaskTrackerContainer} />
    </Switch>
);

export default RoutesContainer;
