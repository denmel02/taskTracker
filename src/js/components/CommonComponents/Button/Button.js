import React, {memo} from 'react';
import {Button as ButtonToolbox} from 'react-toolbox/lib/button';

const Button = (props) => (
    <ButtonToolbox {...props} />
);

export default memo(Button);
