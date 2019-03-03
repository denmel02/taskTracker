import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {DropTarget} from 'react-dnd';
import {DND_COMPONENT} from '../../../constants';

const commonSpec = {
    canDrop: (props) => !!props.canDrop,
    drop: (props, monitor) => {
        const item = monitor.getItem();

        if (props.onDrop) {
            props.onDrop(item);
        }
    }
};

const commonCollect = (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
});

const getDropComponent = (Component) => (class DropComponent extends PureComponent {
    static propTypes = {
        isOver: PropTypes.bool.isRequired,
        canDrop: PropTypes.bool,
        onDrop: PropTypes.func,
        connectDropTarget: PropTypes.func.isRequired
    };

    static defaultProps = {
        canDrop: false,
        onDrop: null
    };

    constructor(props) {
        super(props);

        this.componentRef = React.createRef();
    }

    componentDidMount = () => {
        this.props.connectDropTarget(this.componentRef.current);
    };

    render() {
        const { connectDropTarget, isOver, canDrop, onDrop, ...rest } = this.props;

        return (
            <Component componentRef={this.componentRef} {...rest} />
        );
    }
});

export default (Component, spec = {}) =>
    DropTarget([DND_COMPONENT], {...commonSpec, ...spec}, commonCollect)(getDropComponent(Component));
