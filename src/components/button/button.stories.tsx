import * as React from 'react';
import { Story } from '@storybook/react';
import { select, text, boolean, withKnobs } from '@storybook/addon-knobs';
import 'antd/lib/button/style/index.css';
import { action } from '@storybook/addon-actions';
import {
  MessageOutlined,
  DeleteOutlined,
  WarningOutlined,
  UnorderedListOutlined
} from '@ant-design/icons';
import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Stories,
  Subtitle,
  Title
} from '@storybook/addon-docs/blocks';
import Button from './index';
import CustomizedButton from './customized';
import { xs } from '../../config/breakpoints';

export default {
  title: 'Components/Кнопка',
  component: Button,
  decorators: [
    (Story: any) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
    withKnobs
  ],
  argTypes: { onClick: { action: 'clicked' } },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>
            <a href="https://www.figma.com/file/MmjzqY2FCWQJvL54hhr5w1/Suworld?node-id=4126%3A19891">
              Ссылка на макет
            </a>
          </Subtitle>
          <Description>
            {`Кнопка которая запускает действие. Помимо стандартных возможностей допускается кастомный цвет.
              На разрешении экрана ${xs} и ниже, кнопка занимает всю ширину экрана "width: 100%"`}
          </Description>
          <Primary />
          <Description>Создана на базе кнопки из библиотеки Antd.</Description>
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      )
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/MmjzqY2FCWQJvL54hhr5w1/Suworld?node-id=4126%3A19891'
    }
  }
};

const Template: Story = (args) => <Button {...args} />;

const icons = { MessageOutlined, DeleteOutlined, WarningOutlined, UnorderedListOutlined };
const nullify = (v: any) => (!v ? null : v);

export const Default = Template.bind({});

Default.args = {
  type: 'primary',
  danger: false,
  children: 'Кнопка',
  loading: false
};

Default.argTypes = {
  type: {
    description: 'Типы кнопок',
    control: {
      type: 'select',
      options: ['primary', 'link', 'default', 'dashed', 'text']
    }
  },
  color: {
    description: 'Кастомные цвета из макета',
    control: {
      options: ['blue', 'green', 'orange', 'lightBlue'],
      type: 'select'
    }
  }
};

export const CutomizedButtonWithIcon = () => (
  <CustomizedButton
    icon={React.createElement(icons[select('префикс', Object.keys(icons), Object.keys(icons)[0])])}
    type={select('тип', { primary: 'primary', default: 'default', link: 'link' }, 'primary')}
    danger={boolean('Danger', false)}
    shape={nullify(select('форма', { circle: 'circle', round: 'round', default: null }, null))}
    loading={boolean('Loading', false)}
    onClick={action('onClick')}
    color={select('цвет', ['blue', 'green', 'orange', 'lightBlue', 'yellow', 'red'], 'lightBlue')}
    // eslint-disable-next-line
    children={text('Label', 'Открыть')}
  />
);

export const CutomizedButtonWithSuffix = () => (
  <CustomizedButton
    suffix={React.createElement(icons[select('иконки', Object.keys(icons), Object.keys(icons)[0])])}
    type={select('тип', { primary: 'primary', default: 'default', link: 'link' }, 'primary')}
    danger={boolean('Danger', false)}
    shape={select('форма', { circle: 'circle', round: 'round' }, null)}
    loading={boolean('Loading', false)}
    onClick={action('onClick')}
    color={select('цвет', ['blue', 'green', 'orange', 'lightBlue', 'yellow', 'red'], 'lightBlue')}
    // eslint-disable-next-line
    children={text('Label', 'Перейти')}
  />
);
