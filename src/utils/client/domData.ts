/**
 * 向组件注入 data-component 属性，为了方便使用属性选择器控制 css
 * @param name
 * @returns
 */
export function compoent(name: string) {
  return { 'data-component': name }
}

export default {
  compoent
}
