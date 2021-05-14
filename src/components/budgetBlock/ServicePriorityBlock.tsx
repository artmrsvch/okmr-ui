import React, { FC } from 'react';
import { Tooltip, Checkbox } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { BlackShiftContainer, ColorizedIcon, FormItemCheckbox } from './styled';

interface ServicePriorityBlockProps {}

const ServicePriorityBlock: FC<ServicePriorityBlockProps> = () => (
  <FormItemCheckbox name="isPriorityAdvBudget" valuePropName="checked" initialValue={false}>
    <Checkbox>
      Приоритет рекламного бюджета
      <Tooltip
        color="white"
        title={
          <BlackShiftContainer>
            Если выбрано, то вы можете установить отдельное значение рекламного бюджета
          </BlackShiftContainer>
        }>
        <ColorizedIcon component={InfoCircleOutlined as any} />
      </Tooltip>
    </Checkbox>
  </FormItemCheckbox>
);

export default ServicePriorityBlock;
