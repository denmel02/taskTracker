import React, {memo} from 'react';
import {Input} from 'react-toolbox/lib/input';

const TextField = (props) => (
    <Input {...props} />
);

export default memo(TextField);
