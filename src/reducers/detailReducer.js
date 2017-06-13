
import * as types from '../constants/actionTypes'


const initialState = {};

let detailReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.kArticleView:
            return state;

        case types.kArticleViewReceived:
            return action.data;
            
        default:
            return state;
    }
};

export default detailReducer;


