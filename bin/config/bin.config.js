const { join } = require("path");

const binRootPath = join(__dirname, "../");
const rootPath = join(__dirname, "../../");

const huskyRootPath = join(rootPath, ".husky");

module.exports = {
  binRootPath,
  rootPath,

  huskyRootPath,
};
