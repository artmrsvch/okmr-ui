import * as React from 'react';
import { Story } from '@storybook/react/types-6-0';
import 'antd/lib/button/style/index.css';
import Typography from './index';

import {
  Title as DocsTitle,
  Subtitle as DocsSubtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY
} from '@storybook/addon-docs/blocks';

export default {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    docs: {
      page: () => (
        <>
          <DocsTitle />
          <DocsSubtitle />
          <Description>Типография проекта. Реализован адаптив для мобильных версий</Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      )
    }
  }
};

const Template: Story = () => <div>
  <Typography.Title>H1 Title</Typography.Title>
  <Typography.Subtitle>H2 Subtitle</Typography.Subtitle>
  <Typography.H3>H3 headline</Typography.H3>
  <Typography.H4>H4 headline</Typography.H4>
  <Typography.Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur delectus doloremque dolores eius eligendi fugiat illum incidunt magnam nihil officiis perferendis quae quasi qui quia quos reprehenderit temporibus, vero voluptatum.</Typography.Paragraph>
</div>;



export const Default = Template.bind({});
