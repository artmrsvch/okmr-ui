import React, { ReactNode } from 'react';
import SvgArrowLeft from '../../../icons/ArrowLeft';
import { HeaderStyled, WidgetBlock, AsideToggleLabel } from './styled';

export interface AsideToggleProps {
  htmlFor: string;
}
export interface HeaderProps extends AsideToggleProps {
  widgets?: ReactNode;
}

const AsideToggle: React.FC<AsideToggleProps> = ({ htmlFor }) => (
  <AsideToggleLabel className="aside-toggle-header-label" htmlFor={htmlFor}>
    <SvgArrowLeft />
  </AsideToggleLabel>
);

const Header: React.FC<HeaderProps> = ({ htmlFor, widgets }) => (
  <HeaderStyled>
    <AsideToggle htmlFor={htmlFor} />
    <WidgetBlock>{widgets}</WidgetBlock>
  </HeaderStyled>
);

export default Header;
