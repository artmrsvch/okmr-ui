import styled from 'styled-components';
import { Checkbox as AntdCheckbox } from 'antd';
import { CheckboxProps } from 'antd/lib/checkbox/Checkbox';
import * as React from 'react';

export interface CheckboxStyleProps
  extends React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>> {
  __ANT_CHECKBOX: boolean;
  Group: any;
}

export const CheckboxStyle = styled(AntdCheckbox as CheckboxStyleProps)`
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
