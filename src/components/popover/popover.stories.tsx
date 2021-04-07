import * as React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Popover from './popover';
import 'antd/lib/popover/style/css';

export default {
  title: 'Components/Popover',
  component: Popover
};

const Template: Story = (args) => <Popover {...args} />;

export const Default = Template.bind({});

Default.args = {
  trigger: 'click',
  placement: 'top',
  children:
    'Рекомендуем: устанавливать рекламный бюджет от 10% и более. Чем больше рекламный бюджет, тем больше вовлеченность клиента в программу лояльности. Помните, что рекламный бюджет будет постепенно возвращаться Вам по реферальной программе, при любых покупках Ваших клиентов. Таким образом, Вы стимулируете клиента к активности, и получаете компенсацию рекламных затрат. Это выгодно всем!'
};

Default.argTypes = {
  trigger: {
    description: 'Способ срабатывания',
    control: {
      type: 'select',
      options: ['click', 'focus', 'hover']
    }
  },
  placement: {
    description: 'Положение попапа',
    control: {
      type: 'select',
      options: [
        'topLeft',
        'top',
        'topRight',
        'leftTop',
        'left',
        'leftBottom',
        'rightTop',
        'right',
        'rightBottom',
        'bottomLeft',
        'bottom',
        'bottomRight'
      ]
    }
  }
};
