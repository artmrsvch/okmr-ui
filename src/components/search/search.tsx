import * as React from 'react';
import { Input } from 'antd';
import { StyledSearch, StyledAntdInputProps } from './styled';

const { Search } = Input;
export interface CustomizedSearchProps extends StyledAntdInputProps {
  enterButton?: React.ReactNode | string;
  className?: string;
}

const CustomizedSearch: React.FC<CustomizedSearchProps> = ({ enterButton, ...restProps }) => (
  <StyledSearch enterButton={enterButton} {...restProps} />
);

export default CustomizedSearch;
