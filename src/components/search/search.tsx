import * as React from 'react';
import { StyledSearch, StyledAntdInputProps } from './styled';

export interface CustomizedSearchProps extends StyledAntdInputProps {
  enterButton: React.ReactNode | string;
  className?: string;
}

const CustomizedSearch: React.FC<CustomizedSearchProps> = ({ enterButton, ...restProps }) => (
  <StyledSearch enterButton={enterButton} {...restProps} />
);

export default CustomizedSearch;
