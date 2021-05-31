import styled from 'styled-components';
import { Input, Button } from 'antd';
import { SearchProps } from 'antd/lib/input';

const { Search } = Input;
export interface StyledAntdInputProps extends SearchProps {
  enterButton: React.ReactNode | string;
}

export const StyledSearch = styled(Search)<StyledAntdInputProps>``;

export const ButtonCenter = styled(Button as any)`
  font-size: 20px;
`;
