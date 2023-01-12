const { execSync } = require('child_process')
const { join } = require('path')

const commitizen = require('commitizen/dist/cli/git-cz')

const { rootPath } = require('../config/path.config')

/**
 * 提交代码 git + cz
 */
function main() {
  // git add
  execSync('git add .')

  // cz
  // https://www.npmjs.com/package/commitizen#Commitizen for multi-repo projects
  commitizen.bootstrap({
    cliPath: join(rootPath, 'node_modules/commitizen'),
    config: {
      path: join(rootPath, 'node_modules/cz-conventional-changelog')
    }
  })
}

main()
