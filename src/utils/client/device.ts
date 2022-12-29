import { uaManager } from 'maroonlis-utils'

export function getDeviceType() {
  const parser = uaManager()
  const { name = '' } = parser.getOS()

  if (!name) {
    return 'other'
  }

  if (['Android', 'iOS'].includes(name)) {
    return name.toLowerCase() as 'ios' | 'android'
  }
  return 'other'
}

export function getOSAndBrowser() {
  const parser = uaManager()
  return [parser.getOS().name, parser.getBrowser().name]
}
