import * as React from 'react';
import { Story } from '@storybook/react/types-6-0';
import {
  Title as DocsTitle,
  Subtitle as DocsSubtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY
} from '@storybook/addon-docs/blocks';
import Typography from './index';


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

const Template: Story = () => (
  <div>
    <Typography.Title>H1 Title</Typography.Title>
    <Typography.Subtitle>H2 Subtitle</Typography.Subtitle>
    <Typography.H3>H3 headline</Typography.H3>
    <Typography.H4>H4 headline</Typography.H4>
    <Typography.Paragraph>
      Paragraph <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur delectus
      doloremque dolores eius eligendi fugiat illum incidunt magnam nihil officiis perferendis quae
      quasi qui quia quos reprehenderit temporibus, vero voluptatum. Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Aspernatur delectus doloremque dolores eius eligendi fugiat
      illum incidunt magnam nihil officiis perferendis quae quasi qui quia quos reprehenderit
      temporibus, vero voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
      distinctio eius hic perspiciatis, reiciendis repellat rerum tenetur voluptate. Aspernatur
      autem eligendi impedit ipsam odio odit quas repudiandae sapiente similique vitae! Lorem ipsum
      dolor sit amet, consectetur adipisicing elit. Adipisci, aliquam aliquid animi dicta
      dignissimos dolore doloremque ducimus facilis harum incidunt iure iusto labore laboriosam
      necessitatibus, quasi, repudiandae suscipit temporibus velit!
    </Typography.Paragraph>
    <Typography.Prompt>
      Prompt <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur delectus
      doloremque dolores eius eligendi fugiat illum incidunt magnam nihil officiis perferendis quae
      quasi qui quia quos reprehenderit temporibus, vero voluptatum.
    </Typography.Prompt>
  </div>
);
const TitleTemplate: Story = () => <Typography.Title>H1 Title</Typography.Title>;
const SubtitleTemplate: Story = () => <Typography.Subtitle>H2 Subtitle</Typography.Subtitle>;
const H3Template: Story = () => <Typography.H3>H3 headline</Typography.H3>;
const H4Template: Story = () => <Typography.H4>H4 headline</Typography.H4>;
const ParagraphTemplate: Story = () => (
  <Typography.Paragraph>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur delectus doloremque dolores
    eius eligendi fugiat illum incidunt magnam nihil officiis perferendis quae quasi qui quia quos
    reprehenderit temporibus, vero voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing
    elit. Aspernatur delectus doloremque dolores eius eligendi fugiat illum incidunt magnam nihil
    officiis perferendis quae quasi qui quia quos reprehenderit temporibus, vero voluptatum. Lorem
    ipsum dolor sit amet, consectetur adipisicing elit. Atque distinctio eius hic perspiciatis,
    reiciendis repellat rerum tenetur voluptate. Aspernatur autem eligendi impedit ipsam odio odit
    quas repudiandae sapiente similique vitae! Lorem ipsum dolor sit amet, consectetur adipisicing
    elit. Adipisci, aliquam aliquid animi dicta dignissimos dolore doloremque ducimus facilis harum
    incidunt iure iusto labore laboriosam necessitatibus, quasi, repudiandae suscipit temporibus
    velit!
  </Typography.Paragraph>
);
const PromptTemplate: Story = () => (
  <Typography.Prompt>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur delectus doloremque dolores
    eius eligendi fugiat illum incidunt magnam nihil officiis perferendis quae quasi qui quia quos
    reprehenderit temporibus, vero voluptatum.
  </Typography.Prompt>
);

export const Default = Template.bind({});
export const Title = TitleTemplate.bind({});
export const Subtitle = SubtitleTemplate.bind({});
export const H3 = H3Template.bind({});
export const H4 = H4Template.bind({});
export const Paragraph = ParagraphTemplate.bind({});
export const Prompt = PromptTemplate.bind({});
