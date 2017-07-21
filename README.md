# react-todo

### 开发

	npm run start

### 构建
	
	npm run build

### 注意 

#### react-router v4 路由配置


>react-router v2-v3

```
import { Route, IndexRoute } from 'react-router' // 引入react路由

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="article" component={Article} />
    <Route path="about" component={About} />
    <Route path="news/:id" component={Detail} />
  </Route>
)
```

>react-router v4

```
import { Route,Link,Switch, HashRouter as Router } from 'react-router-dom' // 引入react路由

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
```

#### webpack 只能有一个 export


### 支持  
.babelrc 
.eslintrc



