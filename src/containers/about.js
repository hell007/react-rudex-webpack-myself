import React, {Component} from 'react'

export default class About extends Component {

  render() {

    return (
      <section className="flexColumn container">
        <div className="crumbs">简介</div>
        <div className="line"></div>
        <section className="about">
          <h1>React-redux-myself</h1>
          <h3>技术实现</h3>
          <ul>
            <li>采用React+Redux+ES6+webpack+antd实现</li>
            <li>React-hot-load 热替换</li>
          </ul>
          <h3>运行</h3>
          <ul>
            <li>安装 <code>npm install</code></li>
            <li>启动 <code>npm start</code></li>
            <li>构建 <code>npm run build</code></li>
          </ul>
          <h3>目录结构</h3>
          <code>
            src<br/>
              actions //redux动作生成器<br/>
              assets  //静态资源<br/>
                  absolute //图片<br/>
                  font //字体<br/>
              compontens //UI组建<br/>
              constants  //常量<br/>
              containers //包装器<br/>
              pages // pages<br/>
              reducers //reducers<br/>
              routes //路由<br/>
              store //store<br/>
              utils //工具函数<br/>
            dist //发布目录<br/>
            </code>
          </section>
      </section>
    )
  }
}