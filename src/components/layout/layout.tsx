import React, { ReactNode } from 'react';
import { Container, Content, Workspace, CheckedInput, ContentWrap } from './styled';
import Header from './header/header';
import Navigation from './aside-menu/navigation';
import { toggleId } from './utils';

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
  role: Role;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  isWithoutContentWrap,
  headerWidgets,
  links,
  isHasSupplierStatus,
  isPartner,
  externalLinks,
  role
}) => {
  return (
    <Container>
      <CheckedInput className="navigation-toggle" type="checkbox" id={toggleId} />
      <Navigation
        role={role}
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
};

export default DashboardLayout;
