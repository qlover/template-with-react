const fs = require("fs");

function isDir(path) {
  return new Promise((reslove, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) {
        reject(err);
        return;
      }

      if (stats.isDirectory()) {
        reslove(stats);
        return;
      }
      reject();
    });
  });
}

function isDirAsync(path) {
  const stat = fs.statSync(path);
  if (stat.isDirectory()) {
    return stat;
  }
  return undefined;
}

module.exports = { isDir, isDirAsync };
