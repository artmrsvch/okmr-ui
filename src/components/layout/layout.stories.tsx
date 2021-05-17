import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Story } from '@storybook/react/types-6-0';
import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Stories,
  Subtitle as DocsSubtitle,
  Title as DocsTitle
} from '@storybook/addon-docs/blocks';
import { Tooltip } from 'antd';
import Layout from './index';
import SvgArrowLeft from '../../icons/ArrowLeft';
import { NavigationCountWidget } from './aside-menu/styled';
import SvgLogoMin from '../../icons/LogoMin';
import InternalHeader from './header';
import SvgLogo from '../../icons/Logo';
import { LogoMin } from '../../icons';

const LinkIm = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.5 0.75H10.5C10.3011 0.75 10.1103 0.829018 9.96964 0.96967C9.82899 1.11032 9.74997 1.30109 9.74997 1.5C9.74997 1.69891 9.82899 1.88968 9.96964 2.03033C10.1103 2.17098 10.3011 2.25 10.5 2.25H12.6893L5.49997 9.43934C5.35995 9.58013 5.28147 9.77069 5.28174 9.96925C5.28201 10.1678 5.36101 10.3582 5.50141 10.4986C5.64181 10.639 5.83216 10.718 6.03072 10.7182C6.22928 10.7185 6.41984 10.64 6.56062 10.5L13.75 3.31066V5.5C13.75 5.69891 13.829 5.88968 13.9696 6.03033C14.1103 6.17098 14.3011 6.25 14.5 6.25C14.6989 6.25 14.8896 6.17098 15.0303 6.03033C15.1709 5.88968 15.25 5.69891 15.25 5.5V1.5C15.25 1.30109 15.1709 1.11032 15.0303 0.96967C14.8896 0.829018 14.6989 0.75 14.5 0.75Z"
      fill="#A8CCFF"
    />
    <path
      d="M14.5 7.75C14.3011 7.75 14.1103 7.82902 13.9697 7.96967C13.829 8.11032 13.75 8.30109 13.75 8.5V13.75H2.25V2.25H7.5C7.69891 2.25 7.88968 2.17098 8.03033 2.03033C8.17098 1.88968 8.25 1.69891 8.25 1.5C8.25 1.30109 8.17098 1.11032 8.03033 0.96967C7.88968 0.829018 7.69891 0.75 7.5 0.75H1.5C1.30109 0.75 1.11032 0.829018 0.96967 0.96967C0.829018 1.11032 0.75 1.30109 0.75 1.5V14.5C0.75 14.6989 0.829018 14.8897 0.96967 15.0303C1.11032 15.171 1.30109 15.25 1.5 15.25H14.5C14.6989 15.25 14.8897 15.171 15.0303 15.0303C15.171 14.8897 15.25 14.6989 15.25 14.5V8.5C15.25 8.30109 15.171 8.11032 15.0303 7.96967C14.8897 7.82902 14.6989 7.75 14.5 7.75Z"
      fill="#A8CCFF"
    />
  </svg>
);

interface LinkToImProps {}

const LinkToIm: React.FC<LinkToImProps> = () => (
  <Tooltip title="Посмотреть профиль в магазине">
    <div
      role="link"
      tabIndex={0}
      onKeyDown={() => {
        window.location.href = `https://im.dev.suworld.ru/shops/${'12345'}`;
      }}
      onClick={() => {
        window.location.href = `https://im.dev.suworld.ru/shops/${'12345'}`;
      }}>
      <LinkIm />
    </div>
  </Tooltip>
);

const linksShort = [
  {
    text: 'Заказы',
    to: '/',
    icon: <SvgArrowLeft />,
    supplierOnly: true
  },
  {
    text: 'Товары',
    to: '/one',
    icon: <SvgArrowLeft />,
    supplierOnly: true
  },
  {
    text: 'Удаленные аккаунты',
    to: '/two',
    icon: <SvgArrowLeft />,
    additionalWidget: <NavigationCountWidget>0</NavigationCountWidget>
  },
  {
    text: 'Удаленные аккаунты',
    to: '/twod',
    icon: <SvgArrowLeft />,
    supplierOnly: true
  },
  {
    text: 'Профиль',
    to: '/twog',
    icon: <SvgArrowLeft />,
    supplierOnly: true,
    additionalWidget: <LinkToIm />
  },
  {
    text: 'Товары',
    to: '/onef',
    icon: <SvgArrowLeft />,
    supplierOnly: true
  },
  {
    text: 'Удаленные аккаунты',
    to: '/twof',
    icon: <SvgArrowLeft />,
    supplierOnly: true
  },
  {
    text: 'Настройки',
    to: '/three',
    icon: <SvgArrowLeft />
  }
];
const externalLinks = [
  {
    text: 'Главная страница',
    to: 'https://suworld.ru',
    icon: <LogoMin />
  },
  {
    text: 'Сообщения',
    to: '/four',
    icon: <LogoMin />
  }
];

export default {
  title: 'Components/Layout',
  component: Layout,
  parameters: {
    docs: {
      page: () => (
        <>
          <DocsTitle />
          <DocsSubtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      )
    }
  },
  argTypes: {
    links: {
      control: false
    },
    headerWidgets: {
      control: false
    },
    externalLinks: {
      control: false
    }
  }
};
const headerWidgets = (
  <>
    <div
      style={{
        width: '150px',
        height: '50px',
        backgroundColor: 'darkcyan',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '10px'
      }}>
      <SvgLogo />
    </div>
    <div
      style={{
        width: '40px',
        height: '40px',
        backgroundColor: 'greenyellow',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <SvgLogoMin />
    </div>
  </>
);

const Template: Story = (args: any) => (
  <BrowserRouter>
    <Layout {...args}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque ducimus et eum id
      illum incidunt laborum, libero maiores modi nam nesciunt porro, quos saepe sed tempora
      tenetur. Culpa, odio? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
      doloremque ducimus et eum id illum incidunt laborum, libero maiores modi nam nesciunt porro,
      quos saepe sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Dicta doloremque ducimus et eum id illum incidunt laborum, libero maiores
      modi nam nesciunt porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit
      amet, consectetur adipisicing elit. Dicta doloremque ducimus et eum id illum incidunt laborum,
      libero maiores modi nam nesciunt porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque ducimus et eum id illum
      incidunt laborum, libero maiores modi nam nesciunt porro, quos saepe sed tempora tenetur.
      Culpa, odio? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque
      ducimus et eum id illum incidunt laborum, libero maiores modi nam nesciunt porro, quos saepe
      sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Dicta doloremque ducimus et eum id illum incidunt laborum, libero maiores modi nam nesciunt
      porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Dicta doloremque ducimus et eum id illum incidunt laborum, libero maiores
      modi nam nesciunt porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit
      amet, consectetur adipisicing elit. Dicta doloremque ducimus et eum id illum incidunt laborum,
      libero maiores modi nam nesciunt porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque ducimus et eum id illum
      incidunt laborum, libero maiores modi nam nesciunt porro, quos saepe sed tempora tenetur.
      Culpa, odio? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque
      ducimus et eum id illum incidunt laborum, libero maiores modi nam nesciunt porro, quos saepe
      sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Dicta doloremque ducimus et eum id illum incidunt laborum, libero maiores modi nam nesciunt
      porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Dicta doloremque ducimus et eum id illum incidunt laborum, libero maiores
      modi nam nesciunt porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit
      amet, consectetur adipisicing elit. Dicta doloremque ducimus et eum id illum incidunt laborum,
      libero maiores modi nam nesciunt porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque ducimus et eum id illum
      incidunt laborum, libero maiores modi nam nesciunt porro, quos saepe sed tempora tenetur.
      Culpa, odio? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque
      ducimus et eum id illum incidunt laborum, libero maiores modi nam nesciunt porro, quos saepe
      sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Dicta doloremque ducimus et eum id illum incidunt laborum, libero maiores modi nam nesciunt
      porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Dicta doloremque ducimus et eum id illum incidunt laborum, libero maiores
      modi nam nesciunt porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit
      amet, consectetur adipisicing elit. Dicta doloremque ducimus et eum id illum incidunt laborum,
      libero maiores modi nam nesciunt porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque ducimus et eum id illum
      incidunt laborum, libero maiores modi nam nesciunt porro, quos saepe sed tempora tenetur.
      Culpa, odio? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque
      ducimus et eum id illum incidunt laborum, libero maiores modi nam nesciunt porro, quos saepe
      sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Dicta doloremque ducimus et eum id illum incidunt laborum, libero maiores modi nam nesciunt
      porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Dicta doloremque ducimus et eum id illum incidunt laborum, libero maiores
      modi nam nesciunt porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit
      amet, consectetur adipisicing elit. Dicta doloremque ducimus et eum id illum incidunt laborum,
      libero maiores modi nam nesciunt porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque ducimus et eum id illum
      incidunt laborum, libero maiores modi nam nesciunt porro, quos saepe sed tempora tenetur.
      Culpa, odio? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque
      ducimus et eum id illum incidunt laborum, libero maiores modi nam nesciunt porro, quos saepe
      sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Dicta doloremque ducimus et eum id illum incidunt laborum, libero maiores modi nam nesciunt
      porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Dicta doloremque ducimus et eum id illum incidunt laborum, libero maiores
      modi nam nesciunt porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit
      amet, consectetur adipisicing elit. Dicta doloremque ducimus et eum id illum incidunt laborum,
      libero maiores modi nam nesciunt porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque ducimus et eum id illum
      incidunt laborum, libero maiores modi nam nesciunt porro, quos saepe sed tempora tenetur.
      Culpa, odio? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque
      ducimus et eum id illum incidunt laborum, libero maiores modi nam nesciunt porro, quos saepe
      sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Dicta doloremque ducimus et eum id illum incidunt laborum, libero maiores modi nam nesciunt
      porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Dicta doloremque ducimus et eum id illum incidunt laborum, libero maiores
      modi nam nesciunt porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit
      amet, consectetur adipisicing elit. Dicta doloremque ducimus et eum id illum incidunt laborum,
      libero maiores modi nam nesciunt porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque ducimus et eum id illum
      incidunt laborum, libero maiores modi nam nesciunt porro, quos saepe sed tempora tenetur.
      Culpa, odio? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque
      ducimus et eum id illum incidunt laborum, libero maiores modi nam nesciunt porro, quos saepe
      sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Dicta doloremque ducimus et eum id illum incidunt laborum, libero maiores modi nam nesciunt
      porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Dicta doloremque ducimus et eum id illum incidunt laborum, libero maiores
      modi nam nesciunt porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit
      amet, consectetur adipisicing elit. Dicta doloremque ducimus et eum id illum incidunt laborum,
      libero maiores modi nam nesciunt porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque ducimus et eum id illum
      incidunt laborum, libero maiores modi nam nesciunt porro, quos saepe sed tempora tenetur.
      Culpa, odio? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque
      ducimus et eum id illum incidunt laborum, libero maiores modi nam nesciunt porro, quos saepe
      sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Dicta doloremque ducimus et eum id illum incidunt laborum, libero maiores modi nam nesciunt
      porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Dicta doloremque ducimus et eum id illum incidunt laborum, libero maiores
      modi nam nesciunt porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit
      amet, consectetur adipisicing elit. Dicta doloremque ducimus et eum id illum incidunt laborum,
      libero maiores modi nam nesciunt porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque ducimus et eum id illum
      incidunt laborum, libero maiores modi nam nesciunt porro, quos saepe sed tempora tenetur.
      Culpa, odio? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque
      ducimus et eum id illum incidunt laborum, libero maiores modi nam nesciunt porro, quos saepe
      sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Dicta doloremque ducimus et eum id illum incidunt laborum, libero maiores modi nam nesciunt
      porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Dicta doloremque ducimus et eum id illum incidunt laborum, libero maiores
      modi nam nesciunt porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit
      amet, consectetur adipisicing elit. Dicta doloremque ducimus et eum id illum incidunt laborum,
      libero maiores modi nam nesciunt porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque ducimus et eum id illum
      incidunt laborum, libero maiores modi nam nesciunt porro, quos saepe sed tempora tenetur.
      Culpa, odio? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque
      ducimus et eum id illum incidunt laborum, libero maiores modi nam nesciunt porro, quos saepe
      sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Dicta doloremque ducimus et eum id illum incidunt laborum, libero maiores modi nam nesciunt
      porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Dicta doloremque ducimus et eum id illum incidunt laborum, libero maiores
      modi nam nesciunt porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit
      amet, consectetur adipisicing elit. Dicta doloremque ducimus et eum id illum incidunt laborum,
      libero maiores modi nam nesciunt porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque ducimus et eum id illum
      incidunt laborum, libero maiores modi nam nesciunt porro, quos saepe sed tempora tenetur.
      Culpa, odio? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque
      ducimus et eum id illum incidunt laborum, libero maiores modi nam nesciunt porro, quos saepe
      sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Dicta doloremque ducimus et eum id illum incidunt laborum, libero maiores modi nam nesciunt
      porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Dicta doloremque ducimus et eum id illum incidunt laborum, libero maiores
      modi nam nesciunt porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem ipsum dolor sit
      amet, consectetur adipisicing elit. Dicta doloremque ducimus et eum id illum incidunt laborum,
      libero maiores modi nam nesciunt porro, quos saepe sed tempora tenetur. Culpa, odio? Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque ducimus et eum id illum
      incidunt laborum, libero maiores modi nam nesciunt porro, quos saepe sed tempora tenetur.
      Culpa, odio?
    </Layout>
  </BrowserRouter>
);
export const DashboardLayout = Template.bind({});
DashboardLayout.args = {
  role: 'admin',
  isHasSupplierStatus: true,
  links: linksShort,
  externalLinks,
  isPartner: false,
  headerWidgets
};

DashboardLayout.argTypes = {
  links: {
    description: 'Список роутов навигации'
  },
  headerWidgets: {
    description: 'Компонент с виджетами в шапку'
  },
  isHasSupplierStatus: {
    description: 'Является ли пользователь поставщиком?'
  },
  isPartner: {
    description: 'Применяется ли данный компонент в кабинете партнера?'
  },
  externalLinks: {
    description: 'Список внешних ссылок системы Suworld'
  },
  role: {
    description: 'Роль',
    control: {
      type: 'select',
      options: ['admin', 'accountant', 'user', 'supplier', 'supplierModerator']
    }
  }
};

const HeaderTemplate: Story = (args: any) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100px',
      padding: '10px',
      backgroundColor: '#eff4ff'
    }}>
    <InternalHeader {...args} />
  </div>
);

export const Header = HeaderTemplate.bind({});

Header.args = {
  widgets: headerWidgets
};
