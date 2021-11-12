const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
const proxy = require('./build/vue/proxy')
const assetsCDN = require('./build/vue/cdn')

const resolve = dir => {
  return path.join(__dirname, dir)
}

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: './',
  assetsDir: 'static',
  productionSourceMap: false,
  chainWebpack: config => {
    config.plugin('html').tap((args) => {
      args[0].title = 'cm-mobile-base'
      return args
    })

    config.resolve.alias
      .set('@', resolve('./src'))

    config.module
      .rule('svg')
      .include.add(resolve('./src/icons'))
    config.module.rule('svg').uses.delete('file-loader')
    config.module
      .rule('svg')
      .test(/\.(svg)(\?.*)?$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })

    if (isProd) {
      //  开启CDN加载公共库
      config.plugin('html').tap(args => {
        args[0].cdn = assetsCDN
        return args
      })

      // gzip开启
      config.plugin('compressionPlugin')
        .use(new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8
          // deleteOriginalAssets: true
        }))
    }
  },
  configureWebpack: {
    externals: isProd ? assetsCDN.externals : {}
  },
  devServer: {
    proxy: proxy
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: true
  }
}
