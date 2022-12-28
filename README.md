## 工程相关

### husky

[https://typicode.github.io/husky/#/?id=automatic-recommended](https://typicode.github.io/husky/#/?id=automatic-recommended)

```sh
npx husky install

# 安装 commit-msg
node node_modules/husky/lib/bin add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'

```

### 项目 UI

项目 ui 由 antd5 + tailwindui/tailwindcss 结合

antd 提供一些通用逻辑组件,进行业务二次封装, tailwind 提供样式快速成型

- [ant.design](https://ant.design/)
- [tailwindui 官网](https://tailwindui.com/)
- [一个类似 tailwinui 组件网站](https://www.tailwindtoolbox.com/)
- [Typography](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Ftailwindlabs%2Ftailwindcss-typography) 文章排版插件——增加一个 prose 的 class, 使文章详情页有一个好看的排版。
- [官方表单类](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Ftailwindlabs%2Ftailwindcss-forms) 表单插件——增加了表单的默认样式，使修改表单样式变得简单。

- [颜色生成器](https://javisperez.github.io/tailwindcolorshades/)
