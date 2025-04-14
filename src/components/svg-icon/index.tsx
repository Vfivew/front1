import * as React from 'react';

import { IconTypes, icons } from './icons';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconTypes;
}

export const SVGIcon = ({
  name,
  width = 24,
  height = 24,
  ...rest
}: IconProps): JSX.Element => {
  const Icon = icons[name];

  return <Icon width={width} height={height} {...rest} />;
};
