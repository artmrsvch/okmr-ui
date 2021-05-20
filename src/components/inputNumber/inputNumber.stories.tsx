import * as React from 'react';
import { Story } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import 'antd/lib/button/style/index.css';

import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Stories,
  Subtitle,
  Title
} from '@storybook/addon-docs';
import InputNumberForm from './inputNumber';

export default {
  title: 'Components/Инпут (ввод цифр + форма)',
  component: InputNumberForm,
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
          <Description>Инпут тип: цифры</Description>
          <Primary />
          <Description>
            Сделан на базе Antd. Используется в поставщике в блоке рекламного бюджета
          </Description>
          <ArgsTable story={PRIMARY_STORY} of={InputNumberForm} />
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
  isProduct: true,
  name: 'advBudget',
  rules: [],
  cbHandleChange: (value: number) => ({}),
  tooltipTextProduct:
    'Рекомендуем: устанавливать рекламный бюджет от 10% и более. Чем больше рекламный бюджет, \n                    тем больше вовлеченность клиента в программу лояльности. Помните, что рекламный бюджет будет постепенно возвращаться Вам по реферальной программе, \n                    при любых покупках Ваших клиентов. Таким образом, Вы стимулируете клиента к активности, \n и получаете компенсацию рекламных затрат. Это выгодно всем!',
  tooltipText:
    'Рекомендуем: устанавливать рекламный бюджет от 10% и более. Чем больше рекламный бюджет, \n                    тем больше вовлеченность клиента в программу лояльности. Помните, что рекламный бюджет будет постепенно возвращаться Вам по реферальной программе, при любых покупках Ваших клиентов. \n                    Таким образом, Вы стимулируете клиента к активности, \n и получаете компенсацию рекламных затрат. Это выгодно всем!'
};
const Template: Story = (args) => <InputNumberForm {...args} />;

const DefaultInputNumberForm = Template.bind({});

export const InputNumberFormWithProps = () => (
  <div style={{ display: 'flex', width: '400px' }}>
    <DefaultInputNumberForm label={text('Label', 'Введите число')} {...mockProps} />
  </div>
);
