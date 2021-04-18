import * as React from 'react';
import {Story} from '@storybook/react/types-6-0';
import 'antd/lib/button/style/index.css';
import Button from './index';

import {ArgsTable, Description, Primary, PRIMARY_STORY, Stories, Subtitle, Title} from '@storybook/addon-docs/blocks';
import {xs} from '../../config/breakpoints';

export default {
  title: 'Components/Кнопка',
  component: Button,
  decorators: [(Story) => <div style={{margin: '3em'}}><Story /></div>],
  argTypes: { onClick: { action: 'clicked' } },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle><a href="#">Ссылка на макет</a></Subtitle>
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
  }
};

const Template: Story = (args) => <Button {...args} />;

export const Default = Template.bind({});
export const Large = Template.bind({});

Large.args = {
  type: 'primary',
  danger: false,
  children: 'Кнопка',
  loading: false,
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
