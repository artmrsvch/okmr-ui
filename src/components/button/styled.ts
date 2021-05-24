import styled from 'styled-components';
import { Button, ButtonProps } from 'antd';
import { Colors } from 'src/config/colors';
import { xs } from 'src/config/breakpoints';

interface CustomStyledButton extends ButtonProps {
  color?: 'orange' | 'green' | 'red' | 'lightBlue' | 'yellow' | 'blue';
}

export const StyledAtndButton = styled(Button)`
  &,
  &:hover,
  &:active,
  &:focus {
    background: ${(pr) =>
      pr.type !== 'link' &&
      pr.type !== 'dashed' &&
      pr.type !== 'default' &&
      pr.type !== 'text' &&
      pr.color === 'red'
        ? '#FF6960'
        : pr.type !== 'link' &&
          pr.type !== 'dashed' &&
          pr.type !== 'default' &&
          pr.type !== 'text' &&
          pr.color === 'yellow'
        ? '#fff566'
        : pr.type !== 'link' &&
          pr.type !== 'dashed' &&
          pr.type !== 'default' &&
          pr.type !== 'text' &&
          pr.color === 'blue'
        ? '#40A9FF'
        : pr.type !== 'link' &&
          pr.type !== 'dashed' &&
          pr.type !== 'default' &&
          pr.type !== 'text' &&
          pr.color === 'green'
        ? '#A8CD3D'
        : pr.type !== 'link' &&
          pr.type !== 'dashed' &&
          pr.type !== 'default' &&
          pr.type !== 'text' &&
          pr.color === 'orange'
        ? '#FF9B39'
        : undefined};
    border-color: ${(pr: CustomStyledButton) =>
      pr.color && pr.type !== 'link' && pr.type !== 'text' ? `${Colors[pr.color]}` : undefined};
    color: ${(pr: CustomStyledButton) =>
      pr.color && pr.type !== 'primary' ? `${Colors[pr.color]}` : undefined};
  }

  @media screen and (max-width: ${xs}) {
    width: 100%;
  }
`;
