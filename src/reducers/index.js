import {combineReducers} from 'redux'  // 利用combineReducers 合并reducers
import {routerReducer} from 'react-router-redux' // 将routerReducer一起合并管理

//引入其他reducer
import articleReducer from './articleReducer'
import detailReducer from './detailReducer'


export default combineReducers({
	routing: routerReducer,
	articleReducer,
	detailReducer
})

