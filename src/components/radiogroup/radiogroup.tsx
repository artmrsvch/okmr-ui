import React, { FC } from 'react';
import { Form, Radio } from 'antd';
import { Rule } from 'antd/lib/form';
import { StyledRadioGroup } from './styled';

type NamePath = string | number | (string | number)[];

export interface RadioGroupProps {
  defaultValue?: string;
  disabled?: boolean;
  style: React.CSSProperties;
  name: NamePath;
  rules: Rule[];
  label: string | React.ReactNode;
  options: { label: string; value: string }[];
  required?: boolean;
}
const RadioGroup: FC<RadioGroupProps> = ({
  disabled,
  style,
  name,
  label,
  options,
  required,
  rules,
  defaultValue,
  ...props
}) => {
  if (required && !rules.length && !disabled) {
    /* eslint-disable no-alert */
    rules = [{ required: true, message: 'Обязательное поле' }] as Rule[];
  }
  return (
    <Form.Item rules={rules} name={name} label={label}>
      <StyledRadioGroup
        defaultValue={defaultValue}
        disabled={disabled}
        style={style}
        options={options}
        name={name}
        {...props}
      />
    </Form.Item>
  );
};

export default RadioGroup;
