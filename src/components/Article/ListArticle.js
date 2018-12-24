import React, { Component } from 'react';
import {
    List,
    Avatar,
    Icon
} from 'antd';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'http://i.pravatar.cc/300',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

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
                                    title={<a href={item.href}>{item.title}</a>}
                                    description={item.categories.map(cat => cat.name).join(', ')}
                                    />
                                    {item.paragraphes[0].content}
                                </List.Item>
                            )}
                        />
                    )
                }}
            </Query>
        )
    }
}
