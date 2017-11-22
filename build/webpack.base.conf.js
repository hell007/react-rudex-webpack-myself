var path = require('path')
var utils = require('./utils')
var config = require('../config')
var cssLoaderConfig = require('./css-loader.conf')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.jsx', '.vue', '.less', '.scss', '.css', '.json'],
        alias: {
            //'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'components': path.resolve(__dirname, '../src/components'),
            'containers': path.resolve(__dirname, '../src/containers'),
            'pages': path.resolve(__dirname, '../src/pages'),
            'store': path.resolve(__dirname, '../src/store'),
            'reducers': path.resolve(__dirname, '../src/reducers'),
            'action': path.resolve(__dirname, '../src/action'),
            'routes': path.resolve(__dirname, '../src/routes'),
            'utils': path.resolve(__dirname, '../src/utils'),
            'constants': path.resolve(__dirname, '../src/constants'),
            'vendor': path.resolve(__dirname, '../src/vendor'),
            'static': path.resolve(__dirname, '../static')
        }
    },
    module: {
        rules: [
            /*{
                test: /\.(less|css)$/,
                loader: 'css-loader',
                options: cssLoaderConfig
            }, */{
                test: /\.js$/,
                loader: 'babel-loader?cacheDirectory',
                include: [resolve('src'), resolve('test')]
            }, {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                include: [resolve('src/icons')],
                options: {
                    symbolId: 'icon-[name]'
                }
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                exclude: [resolve('src/icons')],
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    }
}
