
import assign from 'object-assign'

import * as types from '../constants/actionTypes'
import * as urls from '../constants/urls'
import Request from '../utils/request'


export let articleList = (page, pageSize, isLoading)=> {
    let url = urls.kUrlArticleList + '?pageSize=' + pageSize +'&pageNum=' + page;
    
    //console.log("alist",url) 

    return dispatch => {
        dispatch({
            type: types.kArticleList,
            isLoading: isLoading
        });

        return Request.get(url,
            (status, code, message, data) => {//status,code,message,data 为接口返回的字段
                let articles = []
                if (status) {
                    articles = data;
                }
                dispatch({type:types.kArticleListReceived, status:status, code:code, message:message, data:articles });
            },
            (error) => {
                dispatch({'type': types.kActionError, 'isLoading':false});
            }
        );
    }
};


export let articleView = (id)=> {

    let url = urls.kUrlArticleView + '?id=' + id;

    return dispatch => {
        dispatch({type: types.kArticleView});
        return Request.get(url,
            (status, code, message, data) => {
                let article =  {};
                if (status) {
                    article = data;
                }
                dispatch({type:types.kArticleViewReceived, status:status, code:code, message:message, data:article});
            },
            (error) => {
                dispatch({'type': types.kActionError});
            }
        );
    }
};