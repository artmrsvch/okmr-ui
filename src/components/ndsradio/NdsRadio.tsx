import React from 'react';
import 'antd/dist/antd.css';
import { Radio, Form } from 'antd';

export interface NdsRadioProps {
  name: string;
  label: string;
  required?: boolean;
  disabled?: boolean;
  rules?: any[];
}

const NdsRadio: React.FC<NdsRadioProps> = ({ disabled, required, ...props }) => (
  <Form.Item
    {...props}
    rules={required && !disabled ? [{ required: true, message: 'Обязательное поле' }] : []}>
    <Radio.Group name="nds">
      <Radio value={0} disabled={disabled}>
        0%
      </Radio>
      <Radio value={0.1} disabled={disabled}>
        10%
      </Radio>
      <Radio value={0.2} disabled={disabled}>
        20%
      </Radio>
    </Radio.Group>
  </Form.Item>
);

export default NdsRadio;
