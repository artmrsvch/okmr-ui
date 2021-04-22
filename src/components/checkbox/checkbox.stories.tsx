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

export const Disabled = () => (
    <>
      <label htmlFor="checkbox-disabled" title="Не активный" style={{ marginRight: '20px' }}>
        <Checkbox id="checkbox-disabled" disabled />
      </label>
      <label htmlFor="checkbox" title="Активный">
        <Checkbox id="checkbox" disabled checked />
      </label>
    </>
  );
