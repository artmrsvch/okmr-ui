import * as React from 'react';
import { Button } from '../index';
import { ButtonProps } from 'antd';

export interface CustomizedButtonProps {
  suffix?: React.ReactNode | string;
  prefix?: React.ReactNode | string;
  children?: string | React.ReactNode;
  className?: string;
}

export type CustomizedProps = CustomizedButtonProps & ButtonProps;

const CustomizedButton: React.FC<CustomizedProps> = ({
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
