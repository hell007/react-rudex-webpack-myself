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




###支持  
.babelrc 

```
//babel配置文件，不需要做修改，因为都配置好了
{
  "presets": [
    ["es2015", {"modules": false}],
    "react",
    "stage-2"
  ],
  "plugins": [
    "react-hot-loader/babel",
    ["transform-runtime", {
      "helpers": false,
      "polyfill": false,
      "regenerator": true,
      "moduleName": "babel-runtime"
    }],
    "transform-decorators-legacy",
    "transform-async-to-generator",
    "transform-do-expressions",
    "syntax-do-expressions"
  ]
}
```

.eslintrc

```
{
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "plugins": [
    "react"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jquery": true,
    "mocha": true
  },
  "settings": {
    "import/ignore": [
      "node_modules"
    ]
  },
  "rules": {
    "quotes": 0,
    "no-console": 1,
    "no-debugger": 1,
    "no-var": 1,
    "semi": [1, "always"],
    "no-trailing-spaces": 0,
    "eol-last": 0,
    "no-unused-vars": 0,
    "no-underscore-dangle": 0,
    "no-alert": 0,
    "no-lone-blocks": 0,
    "jsx-quotes": 1,
    "react/display-name": [ 1, {"ignoreTranspilerName": false }],
    "react/forbid-prop-types": [1, {"forbid": ["any"]}],
    "react/jsx-boolean-value": 1,
    "react/jsx-closing-bracket-location": 0,
    "react/jsx-curly-spacing": 1,
    "react/jsx-indent-props": 0,
    "react/jsx-key": 1,
    "react/jsx-max-props-per-line": 0,
    "react/jsx-no-bind": 1,
    "react/jsx-no-duplicate-props": 1,
    "react/jsx-no-literals": 0,
    "react/jsx-no-undef": 1,
    "react/jsx-pascal-case": 1,
    "react/jsx-sort-prop-types": 0,
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/no-danger": 1,
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 1,
    "react/no-direct-mutation-state": 1,
    "react/no-multi-comp": 1,
    "react/no-set-state": 0,
    "react/no-unknown-property": 1,
    "react/prefer-es6-class": 1,
    "react/prop-types": 1,
    "react/react-in-jsx-scope": 1,
    "react/require-extension": 1,
    "react/self-closing-comp": 1,
    "react/sort-comp": 1,
    "react/wrap-multilines": 1
  }
}
```

