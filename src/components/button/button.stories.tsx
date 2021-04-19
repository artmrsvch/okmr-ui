import * as React from 'react';
import {Story} from '@storybook/react/types-6-0';
import {select, text, boolean, withKnobs} from '@storybook/addon-knobs';
import 'antd/lib/button/style/index.css';
import Icon, { MessageOutlined, DeleteOutlined, WarningOutlined } from '@ant-design/icons';
import Button from './index';

import {ArgsTable, Description, Primary, PRIMARY_STORY, Stories, Subtitle, Title} from '@storybook/addon-docs/blocks';
import {xs} from '../../config/breakpoints';

export default {
  title: 'Components/Кнопка',
  component: Button,
  decorators: [(Story) => <div style={{margin: '3em'}}><Story /></div>, withKnobs],
  argTypes: {onClick: {action: 'clicked'}},
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle><a href="https://www.figma.com/file/MmjzqY2FCWQJvL54hhr5w1/Suworld?node-id=4126%3A19891">Ссылка на
            макет</a></Subtitle>
          <Description>
            {`Кнопка которая запускает действие. Помимо стандартных возможностей допускается кастомный цвет.
              На разрешении экрана ${xs} и ниже, кнопка занимает всю ширину экрана "width: 100%"`}
          </Description>
          <Primary />
          <Description>
            {`Создана на базе кнопки из библиотеки Antd.`}
          </Description>
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />

        </>
      )
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/MmjzqY2FCWQJvL54hhr5w1/Suworld?node-id=4126%3A19891',
    },
  }
};

const Template: Story = (args) => <Button  {...args} />;


const labelSize = 'размер';
const optionsSize = {
  Large: 'large',
  Small: 'small',
  Middle: 'middle'
}

const icons = { MessageOutlined, DeleteOutlined, WarningOutlined }


export const withAButton = () => (
  <Button
    size={select(labelSize, optionsSize, 'large')}
    loading={boolean('Loading', false)}
    danger={boolean('Danger', false)}
    icon={React.createElement(icons[select("иконки", Object.keys(icons), Object.keys(icons)[0])])}
    shape={select('форма', {circle : "circle" , round :"round"}, null)}
    type={select('тип', { primary : "primary", default : 'default', link : 'link'}, 'primary')}
  >
    {text('Label', 'Кнопка')}
  </Button>
);


export const Default = Template.bind({});
export const ChatButtons = Template.bind({});

ChatButtons.args = {
  type: 'primary',
  danger: false,
  children: 'Перейти в чат',
  icon: <MessageOutlined />,
  loading: false,
  size: 'large'
}
ChatButtons.argTypes = {
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
  },
  size: {
    description: 'Размер кнопки'
  },
  icon: {
    control: {
      type: "select",
      options: {
        MessageOutlined : 'MessageOutlined',
        DeleteOutlined : 'DeleteOutlined'
      },
    },
  },
  /*icon: {
    description: 'Иконка',
    control: {
      option: <MessageOutlined />,
      type: "select"

    }
  }*/
}
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
