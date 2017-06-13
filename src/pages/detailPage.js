'use strict';

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'
import {Spin, Pagination, Icon} from 'antd'
import LocalDb from 'localDb'//本地缓存

import {articleView} from '../actions/articleAction'
import {formatDate,isEmptyObject} from '../utils/utils'

export default class DetailPage extends Component {

  constructor(props){
    super(props);
    this.db = new LocalDb('myself');
    this.state = { //定义组件状态
        prev: {id:'',title:''},
        next:{id:'',title:''}
    };
  }

  componentWillMount(){
    const {dispatch} = this.props
    dispatch(articleView(this.props.params.id))
    this.handleSetArticles(this.props.params.id)
  }

  //上一篇 下一篇
  handleSetArticles(id){
    let articles = this.db.get('articles');
    for(var i=0,len=articles.length; i<len; i++){
      if(id==articles[i]['id']){
        if(i==0){
          this.state.prev.id = null;
          this.state.prev.title = '没有了';
          this.state.next.id = articles[i+1]['id'];
          this.state.next.title = articles[i+1]['title'];
        }else if(i==len-1){
          this.state.next.id = null;
          this.state.next.title = '没有了';
          this.state.prev.id = articles[i-1]['id'];
          this.state.prev.title = articles[i-1]['title'];
        }else{
          this.state.prev.id = articles[i-1]['id'];
          this.state.prev.title = articles[i-1]['title'];
          this.state.next.id = articles[i+1]['id'];
          this.state.next.title = articles[i+1]['title'];
        }
      }
    }
  }

  //上一篇
  handlePrevGo(){
    const {dispatch} = this.props
    var id = ReactDOM.findDOMNode(this.refs.prev).id
    if(!id) return
    dispatch(articleView(id))
    this.handleSetArticles(id)
  }

  //下一篇
  handleNextGo(){
    const {dispatch} = this.props
    var id = ReactDOM.findDOMNode(this.refs.next).id
    if(!id) return
    dispatch(articleView(id))
    this.handleSetArticles(id)
  }


  render(){
    const {detailReducer} = this.props
    const detail = detailReducer

    return (
      <section className="flexColumn container">
        <div className="crumbs">我的文章</div>
        <div className="line"></div>
        
        {isEmptyObject(detail)?
            <div className="loading">
              <Spin size="large"/>
            </div> :
            <section className="articleText">
              <h2>{detail.title}</h2>
              <div className="athd">
                <span>作者：{detail.author}</span> 
                <span>时间：{formatDate(detail.created)}</span>
                <span>浏览量：{detail.views}</span>
              </div>
              <div className="atcontent" dangerouslySetInnerHTML={{__html: detail.content}}></div>
              {detail.url ? <div className="atft">相关链接：<a href={detail.url} target="_bank">{detail.url}</a></div> : ''}
            </section>  
        }
        <div className="line"></div>
        <div className="atopt flexRow">
            <span onClick={this.handlePrevGo.bind(this)} ref='prev' id={this.state.prev.id}>上一篇：{this.state.prev.title}</span>
            <span onClick={this.handleNextGo.bind(this)} ref='next' id={this.state.next.id}>下一篇：{this.state.next.title}</span>
        </div>
      </section>
    )
  }

  componentDidMount(){
    //const {dispatch} = this.props
  }


}

