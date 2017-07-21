'use strict';
import React, {Component} from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Spin, Pagination, Icon } from 'antd'
import LocalDb from 'localDb'

import { articleList } from '../actions/articleAction'
import { formatDate } from '../utils/utils'

export default class ArticlePage extends Component {

	constructor(props) {
		super(props);
		this.db = new LocalDb('myself');
		this.state = { //定义组件状态
			articles: this.db.get('articles') || []
		};
	}

	//es7
	// handlePageChange = (page,pageSize) => {
	//   const {dispatch} = this.props
	//   dispatch(articleList(page,  pageSize, true))
	// }

	//normal
	handlePageChange(page, pageSize) {
		//console.log(page)
		const {dispatch} = this.props
		dispatch(articleList(page, pageSize, true))
	}

	componentWillMount() {
		console.log(this.props);
		
		const {articleReducer,dispatch} = this.props
		//console.log(articleReducer);
		const pagination = articleReducer.pagination
		dispatch(articleList(pagination.current, pagination.pageSize, true))
	}

	render() {
		const {articleReducer} = this.props
		const list = articleReducer.stories
		const pagination = articleReducer.pagination
		this.db.set('articles', list);

		//console.log(this.db.get('articles'))

		return(
			<section className="flexColumn container">
        <div className="crumbs">我的文章</div>
			  <div className="line"></div>
        {
          list.length > 0 ?
          	<ul className="articleList">
          	{list.map((e, index) =>
          	<li key={index}>
            	<Icon type='file-text' />
            	<Link to={'news/' + e.id} className="ellipsis">{e.title}</Link>
            	<span>{formatDate(e.created)}</span> 
          	</li>
          	)}
          	</ul> :
          	<div className="loading">
             	<Spin size="large"/>
          	</div>
        }

  		{list.length > 0  ? 
          <Pagination className="page" onChange={this.handlePageChange.bind(this)} current={pagination.current} pageSize={pagination.pageSize} total={pagination.total} /> 
          : ''
        }
	    </section>
		)
	}

	// componentDidMount() {
	//   // const {defaultFetchData} = this.props;
	//   // //默认调取数据
	//   // defaultFetchData()
	// }

}