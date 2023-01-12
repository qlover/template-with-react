const fs = require('fs')
const { join } = require('path')

const { svgIconOutputPath, svgAssetsPath } = require('../config/path.config')
const { genSvgIconTpl, genSvgIconIndexTpl } = require('../tpl')
const { fillFileName, isDir, delDir, mkdirsSync } = require('../util/files')
const firstCaseUpper = require('../util/firstCaseUpper')

const componentRoot = svgIconOutputPath

function createIconSvgFile(filename) {
  const fileName = filename.replace('.svg', '')
  const componentName = firstCaseUpper(fileName)
  const componentFileName = fillFileName(componentName, '.tsx')
  const componentPath = join(componentRoot, componentFileName)

  if (fs.existsSync(componentPath)) {
    console.log('[exists]', componentPath)
  } else {
    console.log('[creteing]', componentPath)
    const filecontent = genSvgIconTpl(fileName, componentName)
    fs.writeFileSync(componentPath, filecontent)
    console.log('creted')
  }
}

;(async function genSvgIconComponent() {
  await isDir(svgAssetsPath)

  if (fs.existsSync(componentRoot)) {
    delDir(componentRoot)
  }
  mkdirsSync(componentRoot)

  const files = fs.readdirSync(svgAssetsPath)

  files.forEach((filename) => {
    try {
      createIconSvgFile(filename)
    } catch (e) {
      console.log(`genSvgComponent ${filename} Error`, e)
    }
  })

  // 创建 index.tsx
  // TODO: 导出文件
  fs.writeFileSync(join(componentRoot, 'index.tsx'), genSvgIconIndexTpl())
})()
