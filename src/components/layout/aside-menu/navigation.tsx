import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import Modal from 'antd/lib/modal/Modal';
import {
  Aside,
  AsideHeadline,
  AsideLogo,
  AsideCloseIcon,
  AsideHeadlineRole,
  InlineFlexDiv,
  NavigationWrapper,
  NavigationItem,
  NavigationList,
  NavigationExternalLink,
  NavigationLink,
  NavigationLinkText,
  NavigationLinkContent,
  NavigationLinkIcon,
  WidgetWrapper,
  NavigationDivider
} from './styled';
import LogoMin from '../../../icons/LogoMin';
import Logo from '../../../icons/Logo';
import { md } from '../../../config/breakpoints';
import { DashboardLayoutProps, Role } from '../layout';
import { toggleId } from '../utils';

const generateTitleText = (role: Role, isPartner?: boolean) => {
  if (!role) return 'Пользователь';

  if (role === 'admin') return 'Админ';
  if (role === 'accountant') return 'Бухгалтер';
  if (role === 'supplierModerator') return 'Модератор';
  if (role === 'supplier') return 'Продавцы';
  if (role === 'user' && isPartner) return 'Партнеры';
  if (role === 'user') return 'Пользователь';

  return role;
};

export type AsideMenuProps = Pick<
  DashboardLayoutProps,
  | 'userRole'
  | 'isPartner'
  | 'links'
  | 'externalLinks'
  | 'supportLinks'
  | 'auxiliaryLinks'
  | 'documentsLinks'
  | 'isHasSupplierStatus'
>;
export type ExternalLinkListProps = Pick<DashboardLayoutProps, 'links'>;
export type LinkListProps = Pick<DashboardLayoutProps, 'links' | 'isHasSupplierStatus'>;
export type NavigationProps = Omit<AsideMenuProps, 'isPartner' | 'userRole'>;

const ExternalLinkList: React.FC<ExternalLinkListProps> = ({ links }) => (
  <NavigationList>
    {links.map((link: any, iter: number) => (
      <NavigationItem key={`${link.to + iter}`}>
        <NavigationExternalLink href={link.to}>
          <NavigationLinkIcon>{link.icon}</NavigationLinkIcon>
          <NavigationLinkText className="navigation-link-text">{link.text}</NavigationLinkText>
        </NavigationExternalLink>
      </NavigationItem>
    ))}
  </NavigationList>
);

const LinkList: React.FC<LinkListProps> = ({ links, isHasSupplierStatus }) => {
  const [modal, contextHolder] = Modal.useModal();
  const location = useLocation();

  const onItemClick = (isProtectLink: boolean, event: React.MouseEvent, callback?: () => void) => {
    if (callback) {
      event.preventDefault();
      callback();
    }

    if (isProtectLink) {
      const modalConfig = {
        title: 'Необходимо заполнить данные поставщика',
        content: (
          <p>Раздел станет доступным после заполнения информации на странице «Данные компании».</p>
        )
      };

      event.preventDefault();
      modal.error(modalConfig);

      return false;
    }

    const isMobileWidth = window.matchMedia(`(max-width: ${md})`).matches;

    if (isMobileWidth) {
      const expander = document.getElementById(toggleId) as HTMLInputElement;
      expander.checked = false;
    }
    return true;
  };

  const sortedLinks = useMemo(
    () =>
      links
        .filter((link) => !link.hidden)
        .map((link) => ({
          ...link,
          to: link.to.replace(/\/:[0-9a-z_]+\??/gi, ''),
          isActive: location.pathname?.split('/')?.[1] === link.to?.split('/')?.[1]
        })),
    [location.pathname, links]
  );

  return (
    <nav>
      <NavigationList>
        {sortedLinks.map((link) => (
          <NavigationItem
            key={link.to}
            isActive={link.isActive}
            className={link.isActive ? 'navigation-item--active' : undefined}>
            <NavigationLink
              className="navigation-item__link"
              to={link.to}
              disabled={!isHasSupplierStatus && link.supplierOnly}
              onClick={(e: any) =>
                onItemClick(!!(!isHasSupplierStatus && link.supplierOnly), e, link.onClick)
              }>
              <NavigationLinkContent
                className={
                  link.additionalWidget ? 'navigation-link__content--with-widget' : undefined
                }>
                <NavigationLinkIcon className="navigation-link-icon">
                  {link.icon}
                </NavigationLinkIcon>
                <NavigationLinkText className="navigation-link-text">
                  {link.text}
                </NavigationLinkText>
              </NavigationLinkContent>
              {link.additionalWidget && (
                <WidgetWrapper className="navigation-link__widget">
                  {link.additionalWidget}
                </WidgetWrapper>
              )}
            </NavigationLink>
          </NavigationItem>
        ))}
      </NavigationList>
      {contextHolder}
    </nav>
  );
};

const Navigation: React.FC<NavigationProps> = ({
  links,
  externalLinks,
  auxiliaryLinks,
  documentsLinks,
  supportLinks,
  isHasSupplierStatus
}) => (
  <NavigationWrapper>
    <LinkList links={links} isHasSupplierStatus={isHasSupplierStatus} />
    {documentsLinks && documentsLinks[0] && (
      <>
        <NavigationDivider />
        <LinkList links={documentsLinks} isHasSupplierStatus={isHasSupplierStatus} />
      </>
    )}
    {supportLinks && supportLinks[0] && (
      <>
        <NavigationDivider />
        <LinkList links={supportLinks} isHasSupplierStatus={isHasSupplierStatus} />
      </>
    )}
    {externalLinks && externalLinks[0] && (
      <>
        <NavigationDivider />
        <ExternalLinkList links={externalLinks} />
      </>
    )}
    {auxiliaryLinks && auxiliaryLinks[0] && (
      <>
        <NavigationDivider />
        <LinkList links={auxiliaryLinks} isHasSupplierStatus={isHasSupplierStatus} />
      </>
    )}
  </NavigationWrapper>
);

const CloseIcon = () => (
  <svg
    id="Capa_1"
    enableBackground="new 0 0 413.348 413.348"
    fill="#ff7f03"
    strokeWidth={4}
    height="20"
    viewBox="0 0 413.348 413.348"
    width="20">
    <path d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z" />
  </svg>
);

const AsideMenu: React.FC<AsideMenuProps> = ({
  userRole,
  isPartner,
  isHasSupplierStatus,
  externalLinks,
  auxiliaryLinks,
  documentsLinks,
  supportLinks,
  links
}) => (
  <Aside className="aside-menu">
    <AsideHeadline>
      <AsideLogo>
        <InlineFlexDiv href="/" className="aside-menu__logo">
          <Logo />
          <AsideHeadlineRole>{generateTitleText(userRole, isPartner)}</AsideHeadlineRole>
        </InlineFlexDiv>

        <a href="/" className="aside-menu__mini-logo">
          <LogoMin />
        </a>

        <AsideCloseIcon htmlFor={toggleId} className="aside-menu__close">
          <CloseIcon />
        </AsideCloseIcon>
      </AsideLogo>
    </AsideHeadline>
    <Navigation
      isHasSupplierStatus={isHasSupplierStatus}
      auxiliaryLinks={auxiliaryLinks}
      documentsLinks={documentsLinks}
      supportLinks={supportLinks}
      links={links}
      externalLinks={externalLinks}
    />
  </Aside>
);

export default AsideMenu;
