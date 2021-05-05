import * as React from 'react';
import { Story } from '@storybook/react';
import { select, boolean,
  withKnobs } from '@storybook/addon-knobs';
import 'antd/lib/button/style/index.css';
import { action } from '@storybook/addon-actions';
import {Colors} from '../../config/colors';
import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Stories,
  Subtitle,
  Title
} from '@storybook/addon-docs/blocks';
import CustomTabs from './tabs';
import { xs } from '../../config/breakpoints';

const { TabPane } = CustomTabs;

export default {
  title: 'Components/Tабсы',
  component: CustomTabs,
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
  }
};

const Template: Story = (args) => <CustomTabs {...args} />;


const Default = Template.bind({});


export const CustomTabsWith = () => {
  const OWNER_HASH = '#owner';
  const COMPANY_HASH = '#company';
  const NOTIFICATION_HASH = '#notification';
  const defaultActiveKey = OWNER_HASH;
  return (
    <CustomTabs
      onChange={action('onClick')}
      animated={boolean('animated', false)}
      onClick={action('onClick')}
      defaultActiveKey={select('ключ', ['#owner', '#company', '#notification'], '#notification')}
      color={select('цвет', { blue : Colors.blue,  default: Colors.black, yellow : Colors.yellow, red : Colors.red, green : Colors.green }, Colors.blue )}
      text={select('цвет текста', { default : Colors.black, white : '#FFFFFF' }, Colors.black)}
      border={select('бордер', { blue : Colors.blue,  default: Colors.black, yellow : Colors.yellow, red : Colors.red, green : Colors.green }, Colors.blue )}
      //tabPosition={select('позиционирование', ['top', 'left', 'bottom', 'right'], 'top')}
    >

      <TabPane tab="Данные основателя" key={OWNER_HASH}>
        <div>#owner</div>
      </TabPane>
      <TabPane tab="Данные компании" key={COMPANY_HASH}>
        <div>#company</div>
      </TabPane>
      <TabPane tab="Уведомления" key={NOTIFICATION_HASH}>
        <div>#notification</div>
      </TabPane>
    </CustomTabs>
  );
}
