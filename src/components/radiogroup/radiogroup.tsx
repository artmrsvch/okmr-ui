import React, { FC } from 'react';
import { Form } from 'antd';
import { Rule } from 'antd/lib/form';
import { StyledRadioGroup } from './styled';

type NamePath = string | number | (string | number)[];

export interface RadioGroupProps {
  defaultValue?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  formItemName: NamePath;
  radioGropeName?: string;
  rules?: Rule[];
  label: string | React.ReactNode;
  options: { label: string; value: string }[];
  required?: boolean;
}
const RadioGroup: FC<RadioGroupProps> = ({
  disabled,
  style,
  radioGropeName,
  formItemName,
  label,
  options,
  required,
  rules,
  defaultValue,
  ...props
}) => {
  const concatRules =
    required && !rules?.length && !disabled
      ? rules
        ? [...rules, { required: true, message: 'Обязательное поле' }]
        : [{ required: true, message: 'Обязательное поле' }]
      : rules;

  return (
    <Form.Item rules={concatRules} name={formItemName} label={label}>
      <StyledRadioGroup
        defaultValue={defaultValue}
        disabled={disabled}
        style={style}
        options={options}
        name={radioGropeName}
        {...props}
      />
    </Form.Item>
  );
};

export default RadioGroup;
