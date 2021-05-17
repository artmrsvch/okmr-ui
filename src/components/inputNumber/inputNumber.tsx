import React, { FC } from 'react';
import { InputNumber, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Rule } from 'antd/lib/form';
import { SmallFormItemInput } from './styled';

export interface InputNumberFormProps {
  isProduct: boolean;
  name: string;
  rules?: Rule[];
  cbHandleChange: (value: number) => void;
  tooltipTextProduct?: string;
  tooltipText?: string;
}

const InputNumberForm: FC<InputNumberFormProps> = ({
  isProduct,
  name,
  rules,
  cbHandleChange,
  tooltipTextProduct,
  tooltipText
}) => (
  <SmallFormItemInput
    colon={false}
    label={
      isProduct ? (
        <span>
          Рекламный бюджет от {Number(process.env.REACT_APP_MIN_ADVBUDGET || 1)}% до 90% &nbsp;
          <Tooltip title={tooltipTextProduct}>
            <QuestionCircleOutlined />
          </Tooltip>{' '}
        </span>
      ) : (
        <span>
          Рекламный бюджет&nbsp;
          <Tooltip title={tooltipText}>
            <QuestionCircleOutlined />
          </Tooltip>
        </span>
      )
    }
    name={name}
    rules={rules}>
    <InputNumber
      style={{ width: '100%' }}
      size={isProduct ? 'small' : 'middle'}
      precision={1}
      min={Number(process.env.REACT_APP_MIN_ADVBUDGET || 1)}
      max={90}
      formatter={(value: any) => `${value}%`}
      parser={(value: any) => value.replace('%', '')}
      placeholder="%"
      onChange={(value) => cbHandleChange(value)}
    />
  </SmallFormItemInput>
);

export default InputNumberForm;
