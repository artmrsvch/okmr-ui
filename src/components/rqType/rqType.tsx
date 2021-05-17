import React, { FC } from 'react';
import { Form, Radio } from 'antd';

import { StyledRadioGroup } from './styled';

export const rqTypes = [
  { value: 'IP', label: 'ИП' },
  { value: 'ORGANIZATION', label: 'ООО/АО' },
  { value: 'INDIVIDUAL', label: 'Самозанятое лицо' }
];

interface RqTypeRadioProps {
  defaultValue?: string;
  disabled?: boolean;
}
const RqTypeRadio: FC<RqTypeRadioProps> = ({ disabled, ...props }) => (
  <Form.Item name="rqType" label="Тип организации">
    <StyledRadioGroup name="rqType" {...props}>
      {rqTypes.map((rqType) => (
        <Radio style={{ padding: 5 }} key={rqType.value} value={rqType.value} disabled={disabled}>
          {rqType.label}
        </Radio>
      ))}
    </StyledRadioGroup>
  </Form.Item>
);

export default RqTypeRadio;
