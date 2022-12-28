import Icon from "@ant-design/icons";
import React from "react";

import { IconSvgBaseProps } from ".";

import { ReactComponent as Windows } from '@/assets/svgIcon/windows.svg';

const IconSvgWindows = React.forwardRef<HTMLSpanElement, IconSvgBaseProps>(
  (props, ref) => <Icon {...props} ref={ref} component={Windows} />
);

IconSvgWindows.displayName = 'IconSvgWindows';

export default IconSvgWindows;
