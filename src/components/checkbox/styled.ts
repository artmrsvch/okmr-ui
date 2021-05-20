import styled from 'styled-components';
import { Checkbox } from 'antd';

export const StyledCheckbox = styled(Checkbox)`
  margin-top: 2px;
  .ant-checkbox-inner {
    border-radius: 3px;
    width: 25px;
    height: 25px;
    &:after {
      width: 8px;
      height: 14px;
      top: 43%;
      left: 20%;
      border: 2px solid #fff;
      border-top: 0;
      border-left: 0;
    }
  }
`;
