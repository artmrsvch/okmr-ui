import * as React from 'react';
import {StyledAtndButton as Button, StyledAtndButtonProps} from "./styled";

export interface CustomizedButtonProps extends StyledAtndButtonProps {
  suffix?: React.ReactNode | string;
  prefix?: React.ReactNode | string;
  children: string | React.ReactNode;
  className? : string;
}

const CustomizedButton: React.FC<CustomizedButtonProps> = ({suffix, prefix, children, ...restProps}) => (

  <Button
    icon={prefix}
    {...restProps}
  >
    {children || null}
    {suffix}
  </Button>)

export default CustomizedButton;