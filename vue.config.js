const { resolve } = require('path')
const getEntries = require('./build/getEntries')
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer')

const AutoInjectPlugin = require('auto-inject-plugin')


const pages = getEntries(resolve(__dirname, 'src/features/*/index.js'))


module.exports = {
  pages,
  productionSourceMap: false,
  assetsDir: 'bk_static',
  publicPath: '/',
  // configureWebpack: {
  //   resolveLoaders: {
  //     modules: ['node_modules', './loaders/']
  //   }
  // },
  chainWebpack: config => {
    
    config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js')
    if(process.env.NODE_ENV === 'production'){
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: { 
          libs: { 
            name: 'chunk-libs', 
            test: /[\\/]node_modules[\\/]/, 
            priority: 10, 
            chunks: 'initial'
          }, 
          elementUI: { 
            name: 'chunk-elementUI',
            priority: 20,
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/,
          },
          swiper: { 
            name: 'chunk-swiper',
            priority: 20,
            test: /[\\/]node_modules[\\/]_?swiper(.*)/,
          },
          videojs: { 
            name: 'chunk-videojs',
            priority: 20,
            test: /[\\/]node_modules[\\/]_?video.js(.*)/,
          }
        } 
      })
      // config.plugin('AutoInjectPlugin').use(AutoInjectPlugin)
      config.optimization.runtimeChunk({name: 'manifest'})
    }

    if(process.env.npm_config_report){
      config.plugin('analyzer').use(WebpackBundleAnalyzer.BundleAnalyzerPlugin)
    }
    
    

    config
      .plugin('copy')
      .tap(args => {
        const { toType } = args[0][0]
        args[0] = []
        args[0].push({
          from: resolve(__dirname, 'public'),
          to: resolve(__dirname, 'dist/bk_static/js'),
          toType
        })
        return args
      })
  }
}
