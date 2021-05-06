import * as React from 'react';
import { Input } from 'antd';
import { StyledSearch, StyledAntdInputProps } from './styled';

const { Search } = Input;
export interface CustomizedSearchProps extends StyledAntdInputProps {
  suffix?: React.ReactNode | string;
  prefix?: React.ReactNode | string;
  children: string | React.ReactNode;
  className?: string;
}

const CustomizedSearch: React.FC<CustomizedSearchProps> = ({
  suffix,
  prefix,
  children,
  ...restProps
}) => <StyledSearch prefix={prefix} {...restProps} suffix={suffix} />;

export default CustomizedSearch;
