import * as React from 'react';
import { Story } from '@storybook/react';
import { select, text, boolean, withKnobs } from '@storybook/addon-knobs';
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
} from '@storybook/addon-docs/blocks';
import AdvBudgetFormBlock from './index';
import { mockForm } from './AdvBudgetBlock';

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
const mockProps = {
  form: {
    setFieldsValue: () => null,
    getFieldValue: () => null,
    getFieldsValues: () => null
  },
  initialAdv: 0.05,
  isProduct: false,
  name: 'advBudget',
  isEditing: false,
  defaultForItem: 0.12
};
const mockPropsProduct = {
  form: {
    setFieldsValue: () => null,
    getFieldValue: () => null,
    getFieldsValues: () => null
  },
  initialAdv: 0.05,
  isProduct: false,
  name: 'advBudget',
  isEditing: false,
  defaultForItem: 0
};
const Template: Story = (args) => <AdvBudgetFormBlock {...args} />;

const DefaultAdvBudgetFormBlock = Template.bind({});

export const DefaultAdvBlockWithProps = () => (
  <div style={{ display: 'flex', width: '500px' }}>
    <AdvBudgetFormBlock {...mockProps} />
  </div>
);

export const DefaultAdvBlockWithPropsProductWithoutDefault = () => (
  <div style={{ display: 'flex', width: '500px' }}>
    <AdvBudgetFormBlock {...mockPropsProduct} />
  </div>
);
