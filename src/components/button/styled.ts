import styled from 'styled-components';
import { Button } from 'antd/lib';
import * as React from 'react';
import { CheckboxProps } from 'antd/lib/checkbox/Checkbox';
import { Colors } from '../../config/colors';
import { xs } from '../../config/breakpoints';

export interface StyledAtndButtonProps
  extends React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>> {
  __ANT_BUTTON: boolean;
  Group: any;
}

export const StyledAtndButton = styled(Button as StyledAtndButtonProps)<{
  color?: 'orange' | 'green';
}>`
  &,
  &:hover,
  &:active,
  &:focus {
    background: ${(pr) =>
      pr.color &&
      pr.type !== 'link' &&
      pr.type !== 'dashed' &&
      pr.type !== 'default' &&
      pr.type !== 'text'
        ? `${Colors[pr.color]}`
        : undefined};
    border-color: ${(pr) =>
      pr.color && pr.type !== 'link' && pr.type !== 'text' ? `${Colors[pr.color]}` : undefined};
    color: ${(pr) => (pr.color && pr.type !== 'primary' ? `${Colors[pr.color]}` : undefined)};
  }

  @media screen and (max-width: ${xs}) {
    width: 100%;
  }
`;
