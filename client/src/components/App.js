import React, { Component } from 'react';
import '../styles/App.css';
import ListArticles from './Article/ListArticle';
import NewArticle from './Article/NewArticle';
import Article from './Article/Article';
import {
  Layout, Menu, Icon
} from 'antd';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';


const {
  Header, Content, Footer, Sider,
} = Layout;

const SubMenu = Menu.SubMenu;

class App extends Component {
  state = {
    collapsed: false,
    modal: {}
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  /**
   * Show the modal
   */
  showModal = (type) => {
    const modal = {...this.state.modal};
    modal[type] = true;
    this.setState({modal});
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>

        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >

          <div className="logo" />

          <Menu theme="dark" mode="inline">

            <Menu.Item key="1">
              <Icon type="home" />
              <span><Link to="/" style={{ color: '#fff' }}>Home</Link></span>
            </Menu.Item>

            <Menu.Item key="2" onClick={() => this.showModal("add")}>
              <Icon type="plus" />
              <span>New Article</span>
            </Menu.Item>

            <Menu.Item key="3">
              <Icon type="minus" />
              <span>Reset</span>
            </Menu.Item>

            <SubMenu
              key="sub1"
              title={<span><Icon type="filter" /><span>Filters</span></span>}
            >
              <Menu.Item key="4">Tom</Menu.Item>
            </SubMenu>

          </Menu>

        </Sider>

        <Layout>

          <Header style={{ background: '#fff', padding: 0 }} />

          <Content style={{ margin: '0 16px' }}>

            <Switch>
              <Route path={`/:articleId`}
                               component={Article}/>
              <Route exact path="/" component={ListArticles} />
            </Switch>

          </Content>

          <Footer style={{ textAlign: 'center' }}>
            ©2018 Created by Baptiste Debever
          </Footer>

        </Layout>

        <NewArticle visible={this.state.modal.add}></NewArticle>

      </Layout>
    );
  }
}

export default App;