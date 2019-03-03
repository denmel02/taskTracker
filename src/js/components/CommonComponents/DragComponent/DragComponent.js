import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {DragSource} from 'react-dnd';
import {getEmptyImage} from 'react-dnd-html5-backend';
import {DND_COMPONENT} from '../../../constants';

const commonSpec = {
    canDrag: (props) => !!props.canDrag,
    beginDrag: (props) => ({dragProps: props.dragProps})
};

const commonCollect = (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
});

const getDragComponent = (Component) => (class DragComponent extends PureComponent {
    static propTypes = {
        isDragging: PropTypes.bool.isRequired,
        canDrag: PropTypes.bool.isRequired,
        dragProps: PropTypes.object,
        xPreviewTranslation: PropTypes.number,
        yPreviewTranslation: PropTypes.number,
        connectDragSource: PropTypes.func.isRequired,
        connectDragPreview: PropTypes.func.isRequired
    };

    static defaultProps = {
        canDrag: false,
        dragProps: null,
        xPreviewTranslation: null,
        yPreviewTranslation: null
    };

    constructor(props) {
        super(props);

        this.componentRef = React.createRef();
    }

    componentDidMount() {
        const { connectDragSource, connectDragPreview, canDrag } = this.props;

        if (canDrag) {
            connectDragPreview(getEmptyImage(), {captureDraggingState: true});
            connectDragSource(this.componentRef.current);
        }
    }

    render() {
        const {
            connectDragSource, connectDragPreview, isDragging, canDrag, dragProps, xPreviewTranslation,
            yPreviewTranslation, ...rest
        } = this.props;

        return (
            <Component componentRef={this.componentRef} {...rest} />
        );
    }
});

export default (Component, spec = {}) =>
    DragSource(DND_COMPONENT, {...commonSpec, ...spec}, commonCollect)(getDragComponent(Component));


