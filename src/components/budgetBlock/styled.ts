import styled from 'styled-components';
import { Form, Button } from 'antd';
import Icon from '@ant-design/icons';
import { xs } from '../../config/breakpoints';

export const FormItemCheckbox = styled(Form.Item)`
  margin-left: 5px;

  .ant-form-item-control {
    justify-content: flex-end;
  }
`;

export const ButtonWithMargin = styled(Button)`
  margin-left: 15px;
`;
export const BlackShiftContainer = styled.div`
  color: black;
`;

export const ColorizedIcon = styled(Icon)`
  color: #1890ff;
  margin-left: 5px;
`;

export const BudgetContainer = styled.div`
  display: inline-flex;
  padding: 10px 10px 10px 0;
`;

export const SmallFormItemInput = styled(Form.Item)`
  width: 152px;
  flex-direction: column;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }

  .ant-form-item-label,
  .ant-form-item-label > label {
    text-align: left !important;
    max-width: 110%;
  }

  .ant-input-number {
    width: 152px;
    min-height: 28px;
    margin-right: 5px;
  }

  input {
    ::-webkit-input-placeholder {
      text-align: right;
    }

    input:-moz-placeholder {
      text-align: right;
    }
  }

  .supplier-service-price__vendor-code--placeholder-right {
    &::-webkit-input-placeholder {
      text-align: left;
    }

    &:-moz-placeholder {
      text-align: left;
    }
  }

  @media screen and (max-width: ${xs}) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
    .ant-input-number {
      width: 100%;
    }

    .ant-form-item-label {
      padding: 0;
    }

    label {
      font-size: 12px;
      font-weight: bold;
    }
  }
`;
