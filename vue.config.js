const webpack = require('webpack')
const path = require('path') 
const appData = require('./data.json')
const seller = appData.seller
const goods = appData.goods
const ratings = appData.ratings

function resolve(dir){
  return path.join(__dirname,dir)
}
module.exports = {
  // 输出文件目录
  outputDir: './dist',
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  // 搭建webpak服务器
  devServer: {
    before(app) {
      app.get('/api/seller', function (req, res) {
        res.json({
          errno: 0,
          data: seller
        })
      })
      app.get('/api/goods', function (req, res) {
        res.json({
          errno: 0,
          data: goods
        })
      })
      app.get('/api/ratings', function (req, res) {
        res.json({
          errno: 0,
          data: ratings
        })
      })
    }
  },
  // 配置模块加载相对路径
  chainWebpack(config){
    config.resolve.alias
       .set('components', resolve('src/components'))
       .set('common',resolve('src/common'))
       .set('api',resolve('src/api'))
    // limit:1024 文件大小（低于这个值才会base64编码）
    config.module
        .rule('images')
        .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
        .use('url-loader')
        .loader('url-loader')
        .tap(options => Object.assign(options,{limit:10240}))
    // 配置打包所需要的语言
    config.plugin('context')
        .use(webpack.ContextReplacementPlugin,[/moment[/\\]locale$/, /zh-cn/])
  },
  publicPath: ''
}
