const { join } = require("path");

const binRootPath = join(__dirname, "../");
const rootPath = join(__dirname, "../../");

const huskyRootPath = join(rootPath, ".husky");

const svgAssetsSrcPath = "/assets/svgIcon";

/**
 * svg 图标 资产目录
 */
const svgAssetsPath = join(rootPath, "src", svgAssetsSrcPath);

/**
 * svg 图标输出目录
 */
const svgIconOutputPath = join(
  rootPath,
  "src/components/core/Icon/AssetsSvgIcon"
);

const imgIconAssetsSrcPath = "/assets/imgIcon";

/**
 * img 图标资产目录
 */
const imgIconAssetsPath = join(rootPath, "src", imgIconAssetsSrcPath);

/**
 * img 图标输出目录
 */
const imgIconAssetsOutputPath = join(
  rootPath,
  "src/components/core/Icon/ImgIcon"
);

/**
 * iconfont 字体图片生成路径
 */
const iconFontComponentOutputPath = join(
  rootPath,
  "src/components/core/Icon/Iconfont"
);

module.exports = {
  binRootPath,
  rootPath,

  huskyRootPath,

  iconFontComponentOutputPath,

  // 自定义 svg 图标
  svgAssetsSrcPath,
  svgAssetsPath,
  svgIconOutputPath,

  // 自定义 Img 图标
  imgIconAssetsSrcPath,
  imgIconAssetsPath,
  imgIconAssetsOutputPath,
};
