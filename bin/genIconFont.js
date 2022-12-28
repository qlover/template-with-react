const { default: axios } = require("axios");
const { writeFileSync, existsSync } = require("fs");
const { join } = require("path");
const { mkdirsSync } = require("./util/makdirs");
const { iconFontCssUrl, iconFontJsUrl } = require("./config/app.config");
const { iconFontComponentOutputPath } = require("./config/bin.config");

const classNamesReg = /(\.?([a-zA-Z0-9-])+(:before))/g;

function createIconFont(types) {
  if (!existsSync(iconFontComponentOutputPath)) {
    mkdirsSync(iconFontComponentOutputPath);
  }

  writeFileSync(
    join(iconFontComponentOutputPath, "index.tsx"),
    `import { createFromIconfontCN } from '@ant-design/icons';

export type IconFontType = ${types};

/**
 * 借用 antd createFromIconfontCN 创建的 iconfont.cn 上的字体图标
 * 
 * @genScript
 */
const Iconfont = createFromIconfontCN<IconFontType>({
  scriptUrl: '${iconFontJsUrl}',
});

export default Iconfont;
`
  );
}

(async function genIconFontType() {
  axios(iconFontCssUrl).then((cssText) => {
    const cssTextStr = cssText.data;
    if (typeof cssTextStr === "string") {
      const iconTypes = cssTextStr
        .match(classNamesReg)
        .map(
          (className) =>
            `'${className.replace(".", "").replace(":before", "")}'`
        )
        .join(" | ");
      createIconFont(iconTypes);

      console.log("[genIconFontType] success");
    }
  });
})();
