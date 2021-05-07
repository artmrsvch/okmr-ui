import styled from 'styled-components';
import { Form, Tooltip } from 'antd';
import { xs } from '../../config/breakpoints';
import 'antd/lib/button/style/index.css';

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
export const StyledTooltip = styled(Tooltip)`
  .ant-tooltip-inner {
    background-color: green;
    width: 200px;
  }
`;
