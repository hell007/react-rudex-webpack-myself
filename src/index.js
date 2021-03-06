import React from 'react'
import {render} from 'react-dom' 
import {Provider} from 'react-redux' //利用Provider可以使我们的 store 能为下面的组件所用

//Browserhistory 是由 React Router Dom 创建浏览器应用推荐的 history
//使用 hashHistory，浏览器上看到的 url 会是这样的: /#/a/a1?_k=adseis
//使用 browserHistory,需要服务端的支持，浏览器上看到的 url 会是这样的：/a/a1 

import createHistory from 'history/createBrowserHistory'
const browserHistory = createHistory();

// 利用react-router-redux提供的syncHistoryWithStore我们可以结合store同步导航事件 
import {syncHistoryWithStore} from 'react-router-redux' 

import finalCreateStore from './store/configureStore'  //引入store配置
import reducer from './reducers'  // 引入reducers集合 index.js
import Routes from './routes'   // 引入路由配置 index.js

import './assets/base.less'  // 引入样式文件

// 给增强后的store传入reducer
const store = finalCreateStore(reducer)

// 创建一个增强版的history来结合store同步导航事件
const history = syncHistoryWithStore(browserHistory, store)

//需要bable配置的支持
render(
<Provider store={store}>
    <Routes />
</Provider>,
document.getElementById('app')
)


