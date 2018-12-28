import React, { Component } from 'react';
import {
    List,
    Avatar,
    Icon
} from 'antd';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

// TODO: create external file for those queries to avoid repeating
const FEED_QUERY = gql`
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

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

export default class ListArticle extends Component {
    state = {
        count: 0,
        articles: []
    }

    /**
     * Handle the page change
     */
    handlePageChange = (page) => {
        console.log("page changed");
        console.log(page);
    }

    render() {
        return (
            <Query query={FEED_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return `Loading`;
                    if (error) return `Error!: ${error}`;

                    return (
                        <div>
                            <List
                                itemLayout="vertical"
                                size="middle"
                                gutter="12"
                                loading={loading}
                                pagination={{
                                    onChange: (page) => this.handlePageChange(page),
                                    pageSize: 5,
                                }}
                                dataSource={data.feed}
                                renderItem={item => (

                                    <List.Item
                                        key={item.title}
                                        actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                                    >
                                        <List.Item.Meta
                                        avatar={<Avatar src={"http://i.pravatar.cc/300"} />}
                                        title={<Link to={`/${item.id}`}>{item.title}</Link>}
                                        description={item.categories.map(cat => cat.name).join(', ')}
                                        />
                                        Content of the first paragrah: {item.paragraphes[0].content}
                                    </List.Item>
                                )}
                            />

                        </div>
                    )
                }}
            </Query>
        )
    }
}
