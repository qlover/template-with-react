import Icon from '@ant-design/icons'
import React from 'react'

import { IconSvgBaseProps } from '.'

import { ReactComponent as Android } from '@/assets/svgIcon/android.svg'

const IconSvgAndroid = React.forwardRef<HTMLSpanElement, IconSvgBaseProps>(
  (props, ref) => <Icon {...props} ref={ref} component={Android} />
)

IconSvgAndroid.displayName = 'IconSvgAndroid'

export default IconSvgAndroid
