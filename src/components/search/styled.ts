import styled from 'styled-components'
import {Input, InputProps} from 'antd'


const { Search } = Input;

export interface StyledAntdInputProps
  extends React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>> {
  __ANT_INPUT: boolean;
  Group: any;
}

export const StyledSearch = styled(Search as StyledAntdInputProps)<{}>`

`
