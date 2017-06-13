
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
            return state;

        case types.kArticleListReceived:
             
            return {
                stories: action.data.list,
                isLoading: true,
                pagination: {
                  current: action.data.page.current,
                  pageSize:10,
                  total: action.data.page.total
                }
            }
            
        default:
            return state;
    }
};

export default articleReducer;


