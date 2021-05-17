import * as React from 'react';
import { StyledSearch, StyledAntdInputProps } from './styled';

const CustomizedSearch: React.FC<StyledAntdInputProps> = ({ enterButton, ...restProps }) => (
  <StyledSearch enterButton={enterButton} {...restProps} />
);

export default CustomizedSearch;
