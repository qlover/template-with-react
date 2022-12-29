import { get, isFunction } from 'lodash'
import { isNotEmptyArray, isSameNull } from 'maroonlis-utils'

function mapKey(key?: any, index = 0): string {
  if (!isSameNull(key) && !isSameNull(0)) {
    return `${key}${index}`
  }
  return `${index}`
}

export default function mapChildren<
  T = unknown,
  R = LisComponent.MapRenderComponent<T>
>(options?: T[] | T, render?: R) {
  if (!isNotEmptyArray(options)) {
    return null
  }

  return options.map((item, index) => {
    const key = mapKey(get(item, 'key') || get(item, 'id') || index)
    return isFunction(render) ? render({ key, item, index }) : null
  })
}
