import * as React from 'react';
import { Button } from '../index';

export interface CustomizedButtonProps {
  suffix?: React.ReactNode | string;
  prefix?: React.ReactNode | string;
  children: string | React.ReactNode;
  className?: string;
}

const CustomizedButton: React.FC<CustomizedButtonProps> = ({
  suffix,
  prefix,
  children,
  ...restProps
}) => (
  <Button icon={prefix} {...restProps}>
    {children || null}
    {suffix}
  </Button>
);

export default CustomizedButton;
