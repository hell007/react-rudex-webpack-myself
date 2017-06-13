import React from 'react' // 引入react
import { Route, IndexRoute } from 'react-router' // 引入react路由

//引入组件
import App from '../containers/app'
import Index from '../containers/index'
import Article from '../containers/article'
import Detail from '../containers/detail'
import About from '../containers/about'


export default (
  <Route path="/" component={App}>
  	<IndexRoute component={Index} />
  	<Route path="article" component={Article} />
  	<Route path="about" component={About} />
  	<Route path="news/:id" component={Detail} />
  </Route>
)