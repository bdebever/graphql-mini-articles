import React, {
    Component
} from 'react';
import {
    Modal
} from 'antd';
import PropTypes from 'prop-types';
import WrappedDynamicFieldSet from '../Form/DynamicInputs'

export default class NewArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible,
        };
    }

    /**
     * Force update of the state
     *
     * @param {} nextProps
     */
    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.visible !== this.state.visible) {
            this.setState({
                visible: nextProps.visible
            });
        }
    }

    handleClose = () => {
        this.setState({visible: false})
    }

    render() {
        return (
            <Modal
                title="Add a new article"
                visible={this.state.visible}
                onCancel={this.handleClose}
                footer={false}
            >
                <WrappedDynamicFieldSet onSubmitted={this.handleClose}></WrappedDynamicFieldSet>
            </Modal>
        )
    }
}

NewArticle.propTypes = {
    visible: PropTypes.bool
};