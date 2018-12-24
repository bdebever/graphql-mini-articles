import React, {
    Component
} from 'react';
import {
  Button, message
} from 'antd';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const ARTICLE_MUTATION = gql `
  mutation createArticle($title: String!, $categories: [String!]!, $paragraphes: [String!]! ) {
    createArticle(title: $title, categoryIds: $categories, paragraphes: $paragraphes) {
      id
    }
  }
`

export default class CreateArticle extends Component {

  handleError = (error) => {
    console.error(error);
  }

  handleSuccess = (data) => {
    // inform the parent to close the modal
    this.props.onSubmitted(true);
    // Confirm the success
    message.success('This is a message of success');
    // Reset the form fields
    this.props.form.resetFields();
  }

  render() {
    return (
        <Mutation mutation={ARTICLE_MUTATION} onError={this.handleError} onCompleted={this.handleSuccess}>
          {postMutation => <Button type="primary" htmlType="submit" onClick={(e) => {
            e.preventDefault();
            this.props.form.validateFields((err, values) => {
              if (!err) {
                const { title, categories, paragraphes } = values;
                postMutation({ variables: { title, categories, paragraphes }});
              }
            });
          }}>Submit</Button>}
        </Mutation>
    );
  }
}