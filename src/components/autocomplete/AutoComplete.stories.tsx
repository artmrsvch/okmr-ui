import * as React from 'react';
import { Story } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Stories,
  Subtitle,
  Title
} from '@storybook/addon-docs/blocks';
import 'antd/lib/button/style/index.css';
import { createObjectWithLabel } from './helper';
import productCategoriesList from './mocks/productsCategoriesList';
import serviceCategoriesList from './mocks/serviceCategoriesList';

import AutoComplete from './AutoComplete';

export default {
  title: 'Components/Автокомплит категорий',
  component: AutoComplete,
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

const Template: Story = (args) => <AutoComplete {...args} />;

const DefaultAutoComplete = Template.bind({});

export const DefaultAutoCompleteCategoriesProducts = () => {
  const [options, setOptions] = React.useState<any[]>(createObjectWithLabel(productCategoriesList));
  const onSearch = (query: string) => {
    const filtered = productCategoriesList.filter((item: any) => item.name === query);
    setOptions(createObjectWithLabel(filtered));
  };
  return (
    <div style={{ display: 'flex', width: '500px' }}>
      <DefaultAutoComplete
        name="categories"
        label={text('Label', 'Поиск по категории товаров')}
        options={options}
        onSearch={onSearch}
        notFoundContent="Введите название категории"
      />
    </div>
  );
};

export const DefaultAutoCompleteCategoriesServices = () => {
  const [options, setOptions] = React.useState<any[]>(createObjectWithLabel(serviceCategoriesList));
  const onSearch = (query: string) => {
    const filtered = serviceCategoriesList.filter((item: any) => item.name === query);
    setOptions(createObjectWithLabel(filtered));
  };
  return (
    <div style={{ display: 'flex', width: '500px' }}>
      <DefaultAutoComplete
        name="categories"
        label={text('Label', 'Поиск по категории услуг')}
        options={createObjectWithLabel(serviceCategoriesList)}
        onSearch={onSearch}
        notFoundContent="Введите название категории"
      />
    </div>
  );
};
