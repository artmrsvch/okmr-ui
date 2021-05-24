import { Form } from 'antd';
import styled from 'styled-components';

const FormItem = Form.Item;

export const StyledStraightFormItem = styled(FormItem)`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;

  .ant-form-item-label {
    -ms-flex-positive: 0;
  }

  .ant-form-item-control {
    width: 80vw;
  }
`;
export const StyledFormItemItems = styled(FormItem)`
  display: block;

  .ant-form-item-label {
    text-align: left;
    line-height: 1;
    margin-bottom: -5px;
  }

  .ant-form-item-label > label::after {
    content: none;
  }
`;

export const FormItemVerticalLabel = styled(FormItem)`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  div.ant-form-item-label {
    -ms-flex-positive: 0;
    margin-bottom: 15px;
  }
  .ant-form-item-control {
    width: 80vw;
  }
  .ant-input-affix-wrapper {
    width: 342px;
  }
`;
