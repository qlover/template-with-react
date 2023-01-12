const path = require('path')

const CracoLessPlugin = require('craco-less')

const { lessLoaderOptions } = require('./scripts/config/craco.less.config')

module.exports = {
  webpack: {
    // configure: (webpackConfig) => {
    //   let { src } = webpackConfig.resolve.alias

    //   webpackConfig.resolve.alias = Object.assign(webpackConfig.resolve.alias, {
    //     '@': src
    //   })
    //   return webpackConfig
    // },

    // configure: (config) => {
    //   config.module.rules.push({
    //     // 增加 svg 加载
    //     test: /\.svg$/i,
    //     issuer: /\.[jt]sx?$/,
    //     use: ["@svgr/webpack"],
    //   });
    //   return config;
    // },

    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: lessLoaderOptions
    }
  ]
}
