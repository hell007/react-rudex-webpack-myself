import React,{Component} from 'react' // 引入react

//react-router-dom 的使用：http://www.cnblogs.com/dudeyouth/p/6617059.html
//import { Router } from 'react-router-dom'
import { Route, Link, Switch, Router } from 'react-router-dom' // 引入react路由

import createHistory from 'history/createHashHistory'
const history = createHistory()

import { Row, Col } from 'antd'

//引入组件
import HomeContainer from '../containers/homeContainer'
import ArticleContainer from '../containers/articleContainer'
import DetailContainer from '../containers/detailContainer'
import AboutContainer from '../containers/aboutContainer'

//自定义组件
import Mine from '../components/mine'
import Navigation from '../components/navigation'

/*
 * 注意点：
 * 路由没有<Switch>切换不了
 */
export default class App extends Component {
    
	render() {
		return (
			<Router history={history}>
				<section className="h100 flexColumn wrap" >
					<section className="wrapBox">
						<Row gutter={16}>
							<Col className="gutter-row" span={7} >
								<Mine />
							</Col>
							<Col className="gutter-row" span={15} key={location.pathname}>
							<Switch>
								<Route location={location} exact path="/" component={HomeContainer} />
								<Route location={location} path="/article" component={ArticleContainer} />
	  							<Route location={location} path="/news/:id" component={DetailContainer} />
	  							<Route location={location} path="/about" component={AboutContainer} />
	  						</Switch>	
							</Col>
							<Col className="gutter-row" span={2}>
								<Navigation pathname={location.pathname} />
							</Col>
						</Row>
					</section>
				</section>
		    </Router>
		);
	}
}
