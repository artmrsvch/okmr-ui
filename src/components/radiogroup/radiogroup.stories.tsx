import * as React from 'react';
import { select, text, boolean, withKnobs } from '@storybook/addon-knobs';
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
import RadioGroup from './index';

export default {
  title: 'Components/Группа радио кнопок',
  component: RadioGroup,
  decorators: [
    (Story) => (
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
          <Description>Группа радио кнопок</Description>
          <Primary />
          <Description>Создана на базе радио из библиотеки Antd.</Description>
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

export const CustomizedRadioGroup = () => {
  const options = [
    { value: 'IP', label: 'ИП' },
    { value: 'ORGANIZATION', label: 'ООО/АО' },
    { value: 'INDIVIDUAL', label: 'Самозанятое лицо' }
  ];
  const optionsValues = options.map((item: any) => item.value);
  return (
    <div style={{ display: 'flex', width: '500px' }}>
      <RadioGroup
        defaultValue={select('дефолтное значение', optionsValues, 'IP')}
        required={boolean('required', false)}
        options={options}
        label={text('Label', 'Radio Group')}
        name="type"
        disabled={boolean('disabled', false)}
      />
    </div>
  );
};
