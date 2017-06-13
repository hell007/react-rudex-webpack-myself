'use strict';

let Request = {
    /**
     * http get 请求简单封装
     * @param url 请求的URL
     * @param successCallback 请求成功回调
     * @param failCallback 请求失败回调
     */
    get: (url, successCallback, failCallback) => {

        let fetchOptions = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Origin": '*',
                "Access-Control-Allow-Origin": '*'
            },
            'mode': 'cors'
        };

        fetch(url,fetchOptions)
            .then((response) => response.text())
            .then((responseText) => {
                let result = JSON.parse(responseText);
                successCallback(result.status, result.code, result.message, result.data, result.share);
            })
            .catch((err) => {
                failCallback(err);
            });
    },

    /**
     * http post 请求简单封装
     * @param url 请求的URL
     * @param data post的数据
     * @param successCallback 请求成功回调
     * @param failCallback failCallback 请求失败回调
     */
    post: (url, data, successCallback, failCallback) => {
        let formData = new FormData();
        Object.keys(data).map(function(key) {
            var value = data[key];
            formData.append(key, value);
        });

        let fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                // 'Content-Type': 'application/json'
                'Content-Type': 'multipart/form-data',
            },
            body: formData
            // body: JSON.stringify(data)
        };

        fetch(url, fetchOptions)
            .then((response) => response.text())
            .then((responseText) => {
                let result = JSON.parse(responseText);
                successCallback(result.status, result.code, result.message, result.data, result.share);
            })
            .catch((err) => {
                failCallback(err);
            });
    }
};

export default Request;