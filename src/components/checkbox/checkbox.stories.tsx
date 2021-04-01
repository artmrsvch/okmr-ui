import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';

import Checkbox from './index';

export default {
  title: 'Components/Checkbox',
  component: Checkbox
} as Meta;

const Template: Story = (args) => <Checkbox {...args} />;

export const Default = Template.bind({})

Default.args = {
  children: 'Checkbox label'
}

export const Disabled = () => {
  return (
    <>
      <label title='Не активный' style={{marginRight: '20px'}}>
        <Checkbox disabled={true} />
      </label>
      <label title='Активный'>
        <Checkbox disabled={true} checked={true} />
      </label>
    </>
  );
};
