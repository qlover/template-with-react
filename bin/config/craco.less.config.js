const { loaderByName } = require('@craco/craco');

/**
 * .module.less 支持
 *
 *  @see https://www.npmjs.com/package/craco-less
 */
const lessModuleOptions = {
  modifyLessModuleRule(lessModuleRule, context) {
    // Configure the file suffix
    lessModuleRule.test = /\.module.less$/;

    // Configure the generated local ident name.
    const cssLoader = lessModuleRule.use.find(loaderByName('css-loader'));
    cssLoader.options.modules = {
      localIdentName: '[local]_[hash:base64:5]',
    };
    return lessModuleRule;
  },
  modifyLessRule(lessRule, context) {
    // You have to exclude these file suffixes first,
    // if you want to modify the less module's suffix
    lessRule.exclude = /\.less$/;
    return lessRule;
  },
};

/**
 * .less 支持
 */
const lessLoaderOptions = {
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: {
        '@primary-color': '#1DA57A',
      },
      javascriptEnabled: true,
    },
  },
};

module.exports = { lessModuleOptions, lessLoaderOptions };
