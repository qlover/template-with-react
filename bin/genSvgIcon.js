/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
const fs = require("fs");
const { join } = require("path");
const { isDir } = require("./util/isDir");
const firstCaseUpper = require("./util/firstCaseUpper");
const fillFileName = require("./util/fillFileName");
const { genSvgIconTpl, genSvgIconIndexTpl } = require("./tpl/genSvgIconTpl");
const delDir = require("./util/delDir");
const { svgAssetsPath, svgIconOutputPath } = require("./config/bin.config");
const { mkdirsSync } = require("./util/makdirs");

const componentRoot = svgIconOutputPath;

function createIconSvgFile(filename) {
  const fileName = filename.replace(".svg", "");
  const componentName = firstCaseUpper(fileName);
  const componentFileName = fillFileName(componentName, ".tsx");
  const componentPath = join(componentRoot, componentFileName);

  if (fs.existsSync(componentPath)) {
    console.log("[exists]", componentPath);
  } else {
    console.log("[creteing]", componentPath);
    const filecontent = genSvgIconTpl(fileName, componentName);
    fs.writeFileSync(componentPath, filecontent);
    console.log("creted");
  }
}

(async function genSvgIconComponent() {
  await isDir(svgAssetsPath);

  if (fs.existsSync(componentRoot)) {
    delDir(componentRoot);
  }
  mkdirsSync(componentRoot);

  const files = fs.readdirSync(svgAssetsPath);

  files.forEach((filename) => {
    try {
      createIconSvgFile(filename);
    } catch (e) {
      console.log(`genSvgComponent ${filename} Error`, e);
    }
  });

  // 创建 index.tsx
  // TODO: 导出文件
  fs.writeFileSync(join(componentRoot, "index.tsx"), genSvgIconIndexTpl());
})();
