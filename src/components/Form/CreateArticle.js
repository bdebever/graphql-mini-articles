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
      id,
      title,
      categories {
        name
      }
      paragraphes {
        content,
        order
      }
    }
  }
`

const FEED_QUERY = gql `
    {
        feed {
            id,
            title,
            categories {
                name
            }
            paragraphes {
                content,
                order
            }
        }
    }
`;

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

  _updateStoreAfterMutation = (store, value) => {
    const data = store.readQuery({ query: FEED_QUERY });
    data.feed.unshift(value);
    store.writeQuery({ query: FEED_QUERY, data })
  }

  render() {
    return (
        <Mutation
          mutation={ARTICLE_MUTATION}
          onError={this.handleError}
          onCompleted={this.handleSuccess}
          update={(store, { data: { createArticle } }) =>
            this._updateStoreAfterMutation(store, createArticle)
          }
        >
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