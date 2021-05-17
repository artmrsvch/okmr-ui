import React, { ReactNode } from 'react';
import { Tooltip } from 'antd';
import { Container, Content, Workspace, CheckedInput, ContentWrap } from './styled';
import Header from './header/header';
import Navigation from './aside-menu/navigation';
import { toggleId } from './utils';
import logoMin from '../../icons/logoMin.svg';

export type Role = 'admin' | 'accountant' | 'supplierModerator' | 'user' | 'supplier';

export interface NavigationLink {
  text: string;
  to: string;
  icon: React.ComponentElement<any, any>;
  roles?: Role[];
  visibility?: boolean;
  additionalWidget?: React.ReactNode;
  isActive?: boolean;
  // suppler
  supplierOnly?: boolean;
  hidden?: boolean;
}

export interface DashboardLayoutProps {
  isWithoutContentWrap?: boolean;
  headerWidgets?: ReactNode;
  isHasSupplierStatus?: boolean;
  isPartner?: boolean;
  externalLinks?: NavigationLink[];
  links: NavigationLink[];
  userRole: Role;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  isWithoutContentWrap,
  headerWidgets,
  links,
  isHasSupplierStatus,
  isPartner,
  externalLinks,
  userRole
}) => (
  <Container>
    <CheckedInput className="navigation-toggle" type="checkbox" id={toggleId} />
    <Navigation
      userRole={userRole}
      isHasSupplierStatus={isHasSupplierStatus}
      externalLinks={externalLinks}
      links={links}
      isPartner={isPartner}
    />
    <Workspace className="dashboard-workspace">
      <Header htmlFor={toggleId} widgets={headerWidgets} />
      <Content>{isWithoutContentWrap ? children : <ContentWrap>{children}</ContentWrap>}</Content>
    </Workspace>
  </Container>
);

export default DashboardLayout;
