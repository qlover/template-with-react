import { createFromIconfontCN } from '@ant-design/icons'

export type IconFontType =
  | 'auditicon24gl-fileText'
  | 'auditiconjiantouyou'
  | 'auditiconbook'
  | 'auditiconlife-buoyhelp'
  | 'auditicondollar-sign'

/**
 * 借用 antd createFromIconfontCN 创建的 iconfont.cn 上的字体图标
 *
 * @genScript
 */
const Iconfont = createFromIconfontCN<IconFontType>({
  scriptUrl: 'https://at.alicdn.com/t/c/font_3814331_cjle1aleofc.js'
})

export default Iconfont
