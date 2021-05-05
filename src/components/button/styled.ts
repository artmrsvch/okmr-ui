import styled from 'styled-components';
import {Button, ButtonProps} from 'antd';
import * as React from 'react';
import {Colors} from '../../config/colors';
import {xs} from '../../config/breakpoints';

export interface StyledAtndButtonProps
  extends React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLInputElement>> {
  __ANT_BUTTON: boolean;
  Group: any;
}

export const StyledAtndButton = styled(Button as StyledAtndButtonProps)<{
  color?: 'orange' | 'green' | 'red' | 'lightBlue' | 'yellow' | 'blue';
}>`
  &,
  &:hover,
  &:active,
  &:focus {
    background: ${(pr) =>
            // pr.color &&
            pr.type !== 'link' &&
            pr.type !== 'dashed' &&
            pr.type !== 'default' &&
            pr.type !== 'text' &&
            pr.color === 'red' ? '#FF6960' :
                    pr.type !== 'link' &&
                    pr.type !== 'dashed' &&
                    pr.type !== 'default' &&
                    pr.type !== 'text' &&
                    pr.color === 'yellow' ? '#fff566' :
                            pr.type !== 'link' &&
                            pr.type !== 'dashed' &&
                            pr.type !== 'default' &&
                            pr.type !== 'text' &&
                            pr.color === 'blue' ? "#40A9FF" :
                                    pr.type !== 'link' &&
                                    pr.type !== 'dashed' &&
                                    pr.type !== 'default' &&
                                    pr.type !== 'text' &&
                                    pr.color === 'green' ? "#A8CD3D" :
                                            pr.type !== 'link' &&
                                            pr.type !== 'dashed' &&
                                            pr.type !== 'default' &&
                                            pr.type !== 'text' &&
                                            pr.color === 'orange' ?
                                                    "#FF9B39" :
                                                    /* pr.type !== 'link' &&
                                                    pr.type !== 'dashed' &&
                                                    pr.type !== 'default' &&
                                                    pr.type !== 'text' &&
                                                    pr.color ?
                                                    `${Colors[pr.color]}` : */ undefined};
    border-color: ${(pr) =>
            pr.color && pr.type !== 'link' && pr.type !== 'text' ? `${Colors[pr.color]}` : undefined};
    color: ${(pr) => (pr.color && pr.type !== 'primary' ? `${Colors[pr.color]}` : undefined)};
  }

  @media screen and (max-width: ${xs}) {
    width: 100%;
  }
`;
