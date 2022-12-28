// craco.config.js
const path = require('path');
const CracoLessPlugin = require('craco-less');
const { loaderByName } = require('@craco/craco');
const {
  lessModuleOptions,
  lessLoaderOptions,
} = require('./bin/config/craco.less.config');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: lessLoaderOptions,
    },
  ],
};
