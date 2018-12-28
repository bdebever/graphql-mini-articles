import React, {
    Component
} from 'react';
import {
  Select
} from 'antd';
import gql from "graphql-tag";
import { Query } from "react-apollo";

const { Option } = Select;

const GET_CATEGORIES = gql`
  {
    categories {
      id
      name
    }
  }
`;

export default class Categories extends Component {

  render() {
    return (
        <Query query={GET_CATEGORIES}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            return (
              <Select onChange={this.props.onCategorySelected} mode="multiple" placeholder="Please select a category">
                {data.categories.map(cat => (
                  <Option key={cat.id} value={cat.id}>
                    {cat.name}
                  </Option>
                ))}
              </Select>
            );
          }}
        </Query>
    );
  }
}