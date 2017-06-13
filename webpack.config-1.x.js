
var path=require('path');
var webpack = require('webpack');
var ExtractTextPlugins = require('extract-text-webpack-plugin'); //样式抽取
var HtmlWebpackPlugin = require('html-webpack-plugin'); //html模板生成器

module.exports = {
	entry: './src/index.js',
	output   : {
		//publicPath: 'http://localhost:8089/',
		filename: 'index.js'
	},
	module   : {
		loaders: [
			{
				test   : /\.js$/,
				exclude: /node_modules/,
				loaders: ['react-hot', 'babel?' + JSON.stringify({presets: ['react', 'es2015']})]
			},
			{
				test  : /\.less$/,
				loader:'style!css!less'
			},
			{
		        // 图片加载器，可以将较小的图片转成base64，减少http请求  
		        // 如下配置，将小于30720byte的图片转成base64码
		        // 只针对样式背景图片
		        test: /\.(png|jpg|gif|svg)$/,   
		        loader: 'url?limit=30720&name=./assets/absolute/[name].[ext]'
		        //loader: 'url',
		        // query: {
		        //     limit: 30720, //将小于30720byte图片转base64。设置图片大小，小于此数则转换。
		        //     name: './images/[name].[ext]?' //输出目录以及名称
		        // }
		    },
		    {
		        //加载字体文件  注意?t=0.0.1这里配置不对会出错
		        //https://github.com/nicksrandall/base64-font-loader
		        test: /\.(woff|ttf|eot|svg)(\?t=[0-9]\.[0-9]\.[0-9])?$/,
		        loader: 'url?limit=10000&name=font/[name].[ext]'
		        // loader: 'url',
		        // query: {
		        //  limit: 10000,
		        //  name: 'font/[name].[ext]'
		        // }
		    }
		]
	},
	plugins  : [
		new ExtractTextPlugins('index.css', {
			allChunks: true
		}),

		new HtmlWebpackPlugin({
	        filename: 'index.html', //生成的html存放路径，相对于path
	        template: './src/index.html', //html模板路径
	        //favicon: './src/favicon.ico',
	        inject: true //允许插件修改哪些内容，包括head与body
	    })
	],
	resolve  : {
		extension: ['', '.js', '.es6']
	},
	devServer: {
		host: 'localhost',
        port: 3000, 
        inline: true,
        hot: true,
        proxy: {  //webpack-dev-server 代理请求 api
        '/apis': {
          target: 'http://www.kunyujie.com',
          pathRewrite: {'^/apis' : '/'},
          changeOrigin: true
        }
      }
		//let url = 'http://localhost:3000/apis/api/articleList' +'?pageNum=' + page;
	}

};
