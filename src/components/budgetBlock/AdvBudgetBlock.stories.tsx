import * as React from 'react';
import { Story } from '@storybook/react';
import { Form } from 'antd';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';
import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Stories,
  Subtitle,
  Title
} from '@storybook/addon-docs';
import AdvBudgetFormBlock from './index';

export default {
  title: 'Components/Блок управляющий рекламным бюджетом',
  component: AdvBudgetFormBlock,
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
            <a href="https://www.figma.com/file/MmjzqY2FCWQJvL54hhr5w1/SuWorld?node-id=429%3A210">
              Ссылка на макет (смотри описание услуги)
            </a>
          </Subtitle>
          <Description>
            Блок управления рекламным бюджетом при условии наличия предустановленной цифры
            рекламного бюджета или отсутствия ее. При наличии рекламного бюджета в настройках
            магазина показывается эта цифра в процентах и кнопка изменить. При изменении
            проставляется чекбокс приоритета рекламного бюджета. При отсутствии процента в
            настройках предлагается форма для самостоятельного заполнения и чекбокс приоритета.
          </Description>
          <Primary />
          <Description>
            Использованы элементы из Antd и кастомная логика, данный блок используется в админпанели
            и дашборде поставщика
          </Description>
          <ArgsTable story={PRIMARY_STORY} />
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
const Template: Story = (args) => {
  const [form] = Form.useForm();
  return (
    <Form form={form}>
      <AdvBudgetFormBlock form={form} {...args} />
    </Form>
  );
};

export const DefaultAdvBudgetFormBlock = Template.bind({});

export const DefaultAdvBlockWithProps = () => {
  const [form] = Form.useForm();
  return (
    <div style={{ display: 'flex', width: '500px' }}>
      <Form form={form}>
        <DefaultAdvBudgetFormBlock
          name="advBudgetPercent"
          form={form}
          isEditing={boolean('редактирование', false)}
          min={number('минимальное значение', 1)}
          isProduct={boolean('продукт или услуга', false)}
          defaultForItem={number('первоначальное значение РБ, от 0 до 1', 0.05)}
          initialAdv={number('первоначальное значение РБ, от 0 до 1', 0.05)}
        />
      </Form>
    </div>
  );
};

export const DefaultAdvBlockWithPropsWithoutDefault = () => {
  const [form] = Form.useForm();
  return (
    <div style={{ display: 'flex', width: '500px' }}>
      <Form form={form}>
        <DefaultAdvBudgetFormBlock
          form={form}
          name="advBudgetPercent"
          defaultForItem={number('первоначальное значение РБ, от 0 до 1', 0)}
          initialAdv={number('первоначальное значение РБ, от 0 до 1', 0.05)}
          isEditing={boolean('редактирование', false)}
          isProduct={boolean('продукт или услуга', false)}
          min={number('минимальное значение', 1)}
        />
      </Form>
    </div>
  );
};
