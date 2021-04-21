import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Story } from '@storybook/react/types-6-0';
import {
  Title as DocsTitle,
  Subtitle as DocsSubtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY
} from '@storybook/addon-docs/blocks';
import Layout from './index';
import SvgArrowLeft from '../../icons/ArrowLeft';
import { NavigationCountWidget } from './aside-menu/styled';
import LogoMin from '../../icons/LogoMin';
import InternalHeader from './header';
import SvgLogo from '../../icons/Logo';
import SvgLogoMin from '../../icons/LogoMin';

const links = [
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
    text: 'Товары',
    to: '/ones',
    icon: <SvgArrowLeft />,
    supplierOnly: true
  },
  {
    text: 'Удаленные аккаунты',
    to: '/twos',
    icon: <SvgArrowLeft />,
    supplierOnly: true
  },
  {
    text: 'Товары',
    to: '/oned',
    icon: <SvgArrowLeft />,
    supplierOnly: true
  },
  {
    text: 'Удаленные аккаунты',
    to: '/twod',
    icon: <SvgArrowLeft />,
    supplierOnly: true
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
  },
  {
    text: 'Сообщения',
    to: '/four',
    icon: <LogoMin />,
    supplierOnly: true
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
      sed tempora tenetur. Culpa, odio?
    </Layout>
  </BrowserRouter>
);
export const DashboardLayout = Template.bind({});
DashboardLayout.args = {
  role: 'admin',
  isHasSupplierStatus: true,
  links,
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
