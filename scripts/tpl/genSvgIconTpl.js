const { svgAssetsSrcPath } = require('../config/path.config')

function genSvgIconTpl(fileName, comName) {
  return `import Icon from '@ant-design/icons'
import React from 'react'

import { ReactComponent as ${comName} } from '@${svgAssetsSrcPath}/${fileName}.svg'

import { IconSvgBaseProps } from '.'

const IconSvg${comName} = React.forwardRef<HTMLSpanElement, IconSvgBaseProps>(
  (props, ref) => <Icon {...props} ref={ref} component={${comName}} />
)

IconSvg${comName}.displayName = 'IconSvg${comName}'

export default IconSvg${comName}
`
}

function genSvgIconIndexTpl() {
  return `import { IconComponentProps } from '@ant-design/icons/lib/components/Icon';

export type IconSvgBaseProps = Omit<IconComponentProps, 'component' | 'ref'>;
`
}

module.exports = { genSvgIconTpl, genSvgIconIndexTpl }
