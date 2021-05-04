import React, { ReactNode } from 'react';
import { HeaderStyled, WidgetBlock, AsideToggleLabel } from './styled';

export interface AsideToggleProps {
  htmlFor: string;
}
export interface HeaderProps extends AsideToggleProps {
  widgets?: ReactNode;
}

const AsideToggle: React.FC<AsideToggleProps> = ({ htmlFor }) => (
  <AsideToggleLabel className="aside-toggle-header-label" htmlFor={htmlFor}>
    <span className="aside-menu-activation__open">
      <svg width="30" height="18" viewBox="0 0 30 18" fill="gray">
        <rect width="30" height="2" rx="1" />
        <rect y="8" width="30" height="2" rx="1" />
        <rect y="16" width="30" height="2" rx="1" />
      </svg>
    </span>
    <span className="aside-menu-activation__close">
      <svg
        id="Capa_1"
        enableBackground="new 0 0 413.348 413.348"
        fill="gray"
        height="18"
        viewBox="0 0 413.348 413.348"
        width="30">
        <path d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z" />
      </svg>
    </span>
  </AsideToggleLabel>
);

const Header: React.FC<HeaderProps> = ({ htmlFor, widgets }) => (
  <HeaderStyled>
    <WidgetBlock>{widgets}</WidgetBlock>
    <AsideToggle htmlFor={htmlFor} />
  </HeaderStyled>
);

export default Header;
