import React, { FC } from 'react';
import { InputNumber as InputAntdNumber, Tooltip } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { InputProps } from 'antd/lib/input';
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
  min: string | number;
}
export type FormInputNumberProps = FormItemProps & InputProps & InputNumberFormProps
const InputNumber: FC<FormInputNumberProps> = ({
  isProduct,
  name,
  rules,
  cbHandleChange,
  tooltipTextProduct,
  tooltipText,
  min
}) => (
  <SmallFormItemInput
    colon={false}
    label={
      isProduct ? (
        <span>
          Рекламный бюджет от {Number(min) || 1}% до 90% &nbsp;
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
    <InputAntdNumber
      style={{ width: '100%' }}
      size={isProduct ? 'small' : 'middle'}
      precision={1}
      min={Number(min) || 1}
      max={90}
      formatter={(value: any) => `${value}%`}
      parser={(value: any) => value.replace('%', '')}
      placeholder="%"
      onChange={(value) => cbHandleChange(value)}
    />
  </SmallFormItemInput>
);

export default InputNumber;
