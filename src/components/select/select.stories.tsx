import * as React from 'react';
import { Story } from '@storybook/react';
import { select, text, boolean, withKnobs } from '@storybook/addon-knobs';
import { Rule } from 'antd/lib/form';
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
import CustomSelect from 'src/components/select/select';

export default {
  title: 'Components/Селект с кастомными пропсами',
  component: CustomSelect,
  decorators: [
    (Story: any) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
    withKnobs
  ],
  argTypes: {
    onClick: { action: 'clicked' },
    onSelect: { action: 'selected' },
    onSearch: { action: 'looking for' }
  },
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
          <Description>
            Селект, использующий компонент формы (стилизированной) с кастомными пропсами (лейбл
            кастомизирован)
          </Description>
          <Primary />
          <Description>
            Селект предназначен для использования как базовый компонент, создан на базе компонента
            ANTD.
          </Description>
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

const Template: Story = (args) => <CustomSelect {...args} />;

const customRules: Rule[] = [
  {
    required: true,
    message: 'This field is required!'
  }
];
const arrayWithRules = [customRules, []];
const options = [
  { KILOGRAM: { name: 'килограмм', shortname: 'кг' }, label: 'килограмм', value: 'KILOGRAM' },
  { UNIT: { name: 'штука', shortname: 'шт' }, label: 'штука', value: 'UNIT' },
  { METER: { name: 'метр', shortname: 'м' }, label: 'метр', value: 'METER' },
  { LITER: { name: 'литр', shortname: 'л' }, label: 'литр', value: 'LITER' },
  { GRAM: { name: 'грамм', shortname: 'г' }, label: 'грамм', value: 'GRAM' }
];
const valuesArray = ['KILOGRAM', 'UNIT', 'METER', 'LITER', 'GRAM'];
const modeArray = ['multiple', 'tags'];
const sizeArray = ['large', 'middle', 'small'];
const Default = Template.bind({});

export const CutomizedButtonWithIcon = () => (
  <CustomSelect
    name="customSelect"
    label={text('лейбл', 'Кастомизированный селект')}
    rules={select('обязательно к заполнению', arrayWithRules as any, [])}
    style={{ width: 250 }}
    options={options}
    size={select('размер', sizeArray, 'small')}
    defaultValue={select('дефолтное значение', valuesArray, 'KILOGRAM')}
    loading={boolean('загрузка', false)}
    disabled={boolean('disabled', false)}
    mode={select('форма', modeArray, 'multiple')}
    title={text('заголовок', null)}
    isAutocompleteItems={boolean('Лейбл по вертикали', false)}
    isStyledLine={boolean('Форма по всю ширину', false)}
    allowClear={boolean('показать кнопку стереть', false)}
    isLabelVertical={boolean('кастомная форма', false)}
    notFoundContent={text('что показать если совпадения не найден', 'контент не найден')}
    placeholder={text('плейсхолдер', 'единицы измерения')}
    extra={text(
      'замечания',
      'замечания к форме, например: Запомните, что данные единицы применимы только к единице товара либо услуги'
    )}
    initialValue={select('дефолтное значение', valuesArray, 'KILOGRAM')}
  />
);
