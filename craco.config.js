/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const CracoLessPlugin = require("craco-less");
const { lessLoaderOptions } = require("./bin/config/craco.less.config");

module.exports = {
  webpack: {
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
      "@": path.resolve(__dirname, "src/"),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: lessLoaderOptions,
    },
  ],
};
