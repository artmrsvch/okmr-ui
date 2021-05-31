import * as React from 'react';
// import { Story } from '@storybook/react';
import { select, boolean, withKnobs } from '@storybook/addon-knobs';
import 'antd/lib/button/style/index.css';
import { action } from '@storybook/addon-actions';
import { FileSearchOutlined, SearchOutlined } from '@ant-design/icons';
import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Stories,
  Subtitle,
  Title
} from '@storybook/addon-docs';
import CustomizedSearch from 'src/components/search/index';
import { xs } from 'src/config/breakpoints';

export default {
  title: 'Components/Инпут с поиском',
  component: CustomizedSearch,
  decorators: [
    (Story: any) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
    withKnobs
  ],
  argTypes: { onClick: { action: 'clicked' } },
  docs: {
    page: () => (
      <>
        <Title />
        <Subtitle>
          <a href="https://www.figma.com/file/MmjzqY2FCWQJvL54hhr5w1/SuWorld?node-id=4126%3A19891">
            Ссылка на макет
          </a>
        </Subtitle>
        <Description>
          {`Табсы позволяют переходить с вкладки на вкладку не уходя со страницы.
              На разрешении экрана ${xs} и ниже кнопки реализованы столбиком и занимают всю ширину экрана "width: 100%"`}
        </Description>
        <Primary />
        <Description>Созданы на базе библиотеки antd.</Description>
        <ArgsTable story={PRIMARY_STORY} />
        <Stories />
      </>
    )
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/MmjzqY2FCWQJvL54hhr5w1/Suworld?node-id=4126%3A19891'
  }
};

export const CustomizedSearchWithIcon = () => {
  const icons = { SearchOutlined, FileSearchOutlined };
  return (
    <CustomizedSearch
      enterButton={React.createElement(
        icons[select('кнопка поиска', Object.keys(icons), Object.keys(icons)[0])]
      )}
      loading={boolean('loading', false)}
      onClick={action('onClick')}
      disabled={boolean('disabled', false)}
    />
  );
};
