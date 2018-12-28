import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Tag, Divider, Button, Row, Col } from 'antd';
import Paragraphes from './Paragraphes';
import EditArticle from './EditArticle';

const ARTICLE_QUERY = gql`
    query article($id: ID!) {
        article(id: $id)
                {
                    id,
                    title,
                    createdAt
                    categories {
                        id
                        name
                    }
                    paragraphes {
                        id
                        content,
                        order
                    }
                }
        }
`;


/**
 * TODO: split this class into children components
 */
export default class Article extends Component {
    state = {
        modal: {}
    }

    /**
     * Show the modal
     */
    showModal = (type) => {
        const modal = { ...this.state.modal};
        modal[type] = true;
        this.setState({
            modal
        });
    }

    /**
     * TODO: factor that into the same method show/hide using a parameter
     */
    setHidden = () => {
        const modal = { ...this.state.modal};
        modal['edit'] = false;
        this.setState({
            modal
        });
    }

    removeTag = (e) => {
        // TODO: handle this plus handle adding a new tag
        console.log(e);
    }

    render() {
        return (
        <Query query={ARTICLE_QUERY} pollInterval={500} variables={{ id: this.props.match.params.articleId }}>
                {({ loading, error, data }) => {
                    if (loading) return `Loading`;
                    if (error) return `Error!: ${error}`;

                    const { article } = data;

                    return (
                        <div>
                            <h1>Title: { article.title }</h1>
                            <Row gutter={12}>
                                <Col className="gutter-row" span={8}>
                                {
                                    article.categories.map(cat => (
                                        <Tag key={cat.id} closable onClose={this.removeTag}>{cat.name}</Tag>
                                    ))
                                }
                                </Col>
                                <Col className="gutter-row" span={4}>
                                    <Button type="primary" onClick={() => this.showModal('edit')} style={{ float: 'right' }}>Edit the article</Button>
                                </Col>
                            </Row>
                            <Divider orientation="left">Content of the article</Divider>
                            {
                                article.paragraphes
                                ?
                                (<Paragraphes paragraphes={article.paragraphes}></Paragraphes>)
                                :
                                <p>No paragraph for this article</p>
                            }
                            <EditArticle
                                article={article}
                                visible={this.state.modal.edit}
                                closed={this.setHidden}
                            ></EditArticle>
                        </div>
                    )
                }}
            </Query>
        );
    }
};