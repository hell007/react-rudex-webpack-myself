
var path=require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //样式抽取
var HtmlWebpackPlugin = require('html-webpack-plugin'); //html模板生成器

module.exports = {
    entry: './src/index.js',
    output : {
        path: path.join(__dirname,'build'),
        publicPath: "",
        filename: "index.js"
        //chunkFilename: "[id].chunk.js"
    },
    module   : {
        rules: [

            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader?cacheDirectory=true'
                }
            }, 
            {
                test: /\.(less|css)$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader", "less-loader", "postcss-loader"]
                })
            }, 
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: ['url-loader?limit=10000&name=files/[md5:hash:base64:10].[ext]']
            }
        ]
    },
    plugins : [
        new ExtractTextPlugin({ filename: 'css/index.css', disable: false, allChunks: true }),
        new HtmlWebpackPlugin({
            filename: 'index.html', //生成的html存放路径，相对于path
            template: './src/index.html', //html模板路径
            //favicon: './src/favicon.ico',
            inject: true, //允许插件修改哪些内容，包括head与body
            hash: false, //是否添加hash值
            minify: { //压缩HTML文件
                removeComments: true,//移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin() //OccurrenceOrderPlugin webpack2 has renamed
    ],
    resolve : {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.join(__dirname, './src')
        ]
    }
}
