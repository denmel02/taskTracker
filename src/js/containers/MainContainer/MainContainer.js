import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {mainContainerSelector} from '../../selectors';
import LoginContainer from '../LoginContainer';
import TaskTrackerContainer from '../TaskTrackerContainer';

const MainContainer = (props) => props.isLoginSuccess ? <TaskTrackerContainer /> : <LoginContainer />;

MainContainer.propTypes = {
    isLoginSuccess: PropTypes.bool.isRequired
};

export {MainContainer};
export default connect(mainContainerSelector(), null)(memo(MainContainer));
