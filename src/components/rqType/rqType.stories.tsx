import * as React from 'react';
import { Story } from '@storybook/react';
import { Form } from 'antd';
import { boolean, withKnobs, select } from '@storybook/addon-knobs';
import 'antd/lib/button/style/index.css';
import { action } from '@storybook/addon-actions';
import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Stories,
  Subtitle,
  Title
} from '@storybook/addon-docs';
import RqTypeRadio from './rqType';

export default {
  title: 'Components/Радио кнопки',
  component: RqTypeRadio,
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
          <Description>Выбор вида деятельности представлен в виде радиокнопок</Description>
          <Primary />
          <Description>Компонент на базе кнопки из библиотеки Antd (Radio.Group).</Description>
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

const Template: Story = (args) => <RqTypeRadio {...args} />;

export const Default = Template.bind({});

export const RqTypeRadioWithProps = () => {
  const [form] = Form.useForm();

  return (
    <Form form={form}>
      <Default disabled={boolean('disabled', false)} />
    </Form>
  );
};
