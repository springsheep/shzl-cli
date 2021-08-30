/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production';
const resolve = (dir) => path.join(__dirname, dir);
const assetsCDN = {
  externals: {
    AMap: 'AMap',
  },
  js: [
    'https://webapi.amap.com/maps?v=2.0&key=33a5c3cf2b59f5126630c9433a438cdc',
  ]
};

module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  publicPath: './',
  outputDir: 'management-front',
  configureWebpack: {
    plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)],
    externals: assetsCDN.externals
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      const customArgs = args;
      customArgs[0].title = '分拨系统';
      return customArgs;
    });
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@api', resolve('src/api'))
      .set('@img', resolve('src/assets/images'));
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => {
        const customOptions = options;
        customOptions.compilerOptions.preserveWhitespace = true;
        return customOptions;
      })
      .end();
    config.when(!isProd, (options) => options.devtool('cheap-source-map'));
    config.when(isProd, (options) => {
      options.optimization.minimizer('terser').tap((args) => {
        const customArgs = args;
        customArgs[0].terserOptions.compress.drop_console = true;
        customArgs[0].terserOptions.compress.drop_debugger = true;
        customArgs[0].terserOptions.compress.warnings = false;
        return customArgs;
      });
      options.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial'
          },
          ant: {
            name: 'chunk-antd',
            priority: 20, // 权重大于lib和app
            test: /[\\/]node_modules[\\/]_?ant-design-vue(.*)/
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'),
            minChunks: 3,
            priority: 5,
            reuseExistingChunk: true
          },
          geojson: {
            name: 'chunk-geojson',
            test: resolve('src/assets/geojson'),
            minChunks: 3,
            priority: 5,
            reuseExistingChunk: true
          }
        }
      });
      options.optimization.runtimeChunk('single');
    });
    config.plugin('html').tap((args) => {
      args[0].cdn = assetsCDN;
      return args;
    });
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'border-radius-base': '2px'
        },
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    open: false,
    https: false,
    proxy: {
      '/api': {
        target: 'http://172.18.103.92:8082',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      },
      '/devApi': {
        target: 'http://192.168.50.100:8082',
        changeOrigin: true,
        pathRewrite: { '^/devApi': '' }
      },
      '/fontassets': {
        target: 'http://172.18.103.92:8083',
        changeOrigin: true,
        pathRewrite: { '^/font': '' }
      }
    },
    progress: true
  }
};
