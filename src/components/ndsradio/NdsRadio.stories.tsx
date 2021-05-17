import * as React from 'react';
import { Story } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import 'antd/lib/button/style/index.css';
import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Stories,
  Subtitle,
  Title
} from '@storybook/addon-docs/blocks';
import NdsRadio from './NdsRadio';

export default {
  title: 'Components/Радио кнопки для выбора значения НДС',
  component: NdsRadio,
  decorators: [
    (Story: any) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
    withKnobs
  ],
  argTypes: { onChange: { action: 'changed' } },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>
            <a href="https://www.figma.com/file/MmjzqY2FCWQJvL54hhr5w1/SuWorld?node-id=429%3A210">
              См в фигме
            </a>
          </Subtitle>
          <Description>Радио кнопки для выбора значения НДС</Description>
          <Primary />
          <Description>Выбор значения НДС (с опцией задизейблено)</Description>
          <ArgsTable story={PRIMARY_STORY} of={NdsRadio} />
          <Stories />
        </>
      )
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/MmjzqY2FCWQJvL54hhr5w1/SuWorld?node-id=429%3A210'
    }
  }
};

const Template: Story = (args) => <NdsRadio {...args} />;

const DefaultNdsRadio = Template.bind({});

export const NdsRadioWithProps = () => (
  <div style={{ display: 'flex', width: '400px' }}>
    <DefaultNdsRadio
      label={text('Label', 'НДС')}
      disabled={boolean('disabled', false)}
      required={boolean('required', false)}
    />
  </div>
);
