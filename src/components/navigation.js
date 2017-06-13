import React, {Component} from 'react'
import {IndexLink, Link} from 'react-router'

import {Menu, Icon} from 'antd'

const SubMenu       = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: this.props.pathname == '/' ? '/index' : this.props.pathname
    }    
  }

  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    
    return (
      <Menu
        onClick={this.handleClick.bind(this)}
        selectedKeys={[this.state.current]}
        mode="inline" >
        <Menu.Item key="/index">
          <IndexLink to="/">首页</IndexLink>
        </Menu.Item>
        <Menu.Item key="/article">
          <Link to="/article">文章</Link>
        </Menu.Item>
        <Menu.Item key="/about">
          <Link to="/about">关于</Link>
        </Menu.Item>
      </Menu>
    )
  }
}