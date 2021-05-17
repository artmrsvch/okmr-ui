import styled from 'styled-components';
import { Input, InputProps, Button } from 'antd';

const { Search } = Input;

export interface StyledAntdInputProps
  extends React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>> {
  __ANT_INPUT: boolean;
  Group: any;
  enterButton: React.ReactNode | string;
}

export const StyledSearch = styled(Search)<StyledAntdInputProps>``;

export const ButtonCenter = styled(Button)`
  font-size: 20px;
`;
