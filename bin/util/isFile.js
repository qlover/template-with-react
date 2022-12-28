const fs = require("fs");

function isFile(path) {
  return new Promise((reslove, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) {
        reject(err);
        return;
      }

      if (stats.isFile()) {
        reslove(stats);
        return;
      }
      reject();
    });
  });
}

function isFileAsync(path) {
  const stat = fs.statSync(path);
  if (stat.isDirectory()) {
    return stat;
  }
  return undefined;
}

module.exports = { isFile, isFileAsync };
