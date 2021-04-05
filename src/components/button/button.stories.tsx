import * as React from 'react';
import { Story } from '@storybook/react/types-6-0';
import 'antd/lib/button/style/index.css';
import Button from './index';

import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY
} from '@storybook/addon-docs/blocks';
import { xs } from '../../config/breakpoints';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description>
            {`Стандартная кнопка из библиотека antd, которая отстилизована согласно макету. Помимо
                  стандартных props, появился "color", который согласно цветовой схеме макета добавляет нужный цвет.
                  На разрешении экрана ${xs} и ниже, кнопка занимает всю ширину экрана "width: 100%"`}
          </Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      )
    }
  }
};

const Template: Story = (args) => <Button {...args} />;

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
