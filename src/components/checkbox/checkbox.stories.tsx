import * as React from 'react';
import { Story } from '@storybook/react/types-6-0';
import 'antd/lib/checkbox/style/index.css';

import Checkbox from './index';

export default {
  title: 'Components/Checkbox',
  component: Checkbox
};

const Template: Story = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Checkbox label'
};

export const Disabled = () => {
  return (
    <>
      <label title="Не активный" style={{ marginRight: '20px' }}>
        <Checkbox disabled={true} />
      </label>
      <label title="Активный">
        <Checkbox disabled={true} checked={true} />
      </label>
    </>
  );
};
