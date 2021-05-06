import * as React from 'react';
import { Story } from '@storybook/react';
import {
  select,
  // text,
  boolean,
  withKnobs
} from '@storybook/addon-knobs';
import 'antd/lib/button/style/index.css';
import { action } from '@storybook/addon-actions';
import { FileSearchOutlined, SearchOutlined } from '@ant-design/icons';
import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Stories,
  Subtitle,
  Title
} from '@storybook/addon-docs/blocks';
import CustomizedSearch from './index';
import { ButtonCenter } from './styled';
import { xs } from '../../config/breakpoints';
import CopyLinks from '../../icons/CopyLinks';

export default {
  title: 'Components/Инпут с поиском',
  component: CustomizedSearch,
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

const Template: Story = (args) => (
  <CustomizedSearch enterButton={<ButtonCenter icon={<CopyLinks />} />} {...args} />
);

const icons = { SearchOutlined, FileSearchOutlined };
// const nullify = (v: any) => (!v ? null : v);

export const Default = Template.bind({});

export const CutomizedButtonWithIcon = () => (
  <CustomizedSearch
    enterButton={React.createElement(
      icons[select('кнопка поиска', Object.keys(icons), Object.keys(icons)[0])]
    )}
    loading={boolean('loading', false)}
    onClick={action('onClick')}
    disabled={boolean('disabled', false)}
  />
);
