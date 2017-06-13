var path=require('path');
var webpack = require('webpack');
var WebpackStripLoader = require('strip-loader');
var ExtractTextPlugins = require('extract-text-webpack-plugin'); //样式抽取
var HtmlWebpackPlugin = require('html-webpack-plugin'); //html模板生成器

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname,'dist'),
    publicPath: "",
    filename: "index.js"
    //chunkFilename: "[id].chunk.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?' + JSON.stringify({presets: ['react', 'es2015']})]
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugins.extract(['css','less'])
      },
      {
        test: [/\.js$/, /\.es6$/],
        exclude: /node_modules/,
        loader: WebpackStripLoader.loader('console.log')
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
  plugins: [
    new ExtractTextPlugins('index.css', {
        allChunks: true
    }),
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  resolve: {
    extension: ['', '.js', '.es6']
  }
};
