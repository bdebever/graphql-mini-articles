import React, {
    Component
} from 'react';
import {
    Modal
} from 'antd';
import PropTypes from 'prop-types';

export default class EditArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible,
            article: props.article
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
                title="Edit the article"
                visible={this.state.visible}
                onCancel={this.handleClose}
                footer={false}
            >

            </Modal>
        )
    }
}