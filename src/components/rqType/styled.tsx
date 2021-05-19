import { Radio } from 'antd';
import styled from 'styled-components';
import { xs } from '../../config/breakpoints';

export const StyledRadioGroup = styled(Radio.Group)`
  @media (max-width: ${xs}) {
    display: flex;
    flex-direction: column;
  }
  .ant-radio-inner {
    width: 20px;
    height: 20px;

    &:after {
      width: 12px;
      height: 12px;
      top: 3.2px;
      left: 2.9px;
    }
  }
`;
