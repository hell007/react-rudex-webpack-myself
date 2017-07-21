
import * as types from '../constants/actionTypes'


const initialState = {
    stories: [],
    isLoading: true,
    pagination: {
      current: 1,
      pageSize:10,
      total: null
    }
};

let articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.kArticleList:
            //return state;
            return {
                ...state   //三个点是展开符
            }

        case types.kArticleListReceived:
             
            return {
            	...state,
                stories: action.data.list,
                isLoading: true,
                pagination: {
                  current: action.data.page.current,
                  pageSize:10,
                  total: action.data.page.total
                }
            }
            
        default:
            //return state;
            return {...state};
    }
};

export default articleReducer;


