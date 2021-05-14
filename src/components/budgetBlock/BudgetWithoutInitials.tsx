import React, { FC } from 'react';
import { InputNumber } from 'antd';
import SmallFormItemInput from './SmallFormItemInput';
import LabelProduct from './LabelProduct';
import LabelService from './LabelService';
import ProductPriorityBlock from './ProductPriorityBlock';
import ServicePriorityBlock from './ServicePriorityBlock';

interface BudgetWithoutInitialsProps {
  isProduct?: boolean;
  rules: any[];
  name?: string;
  handleChangeAdvBudget: (value?: number | string | null) => void;
  min?: number;
}

const BudgetWithoutInitials: FC<BudgetWithoutInitialsProps> = ({
  isProduct,
  rules,
  name,
  handleChangeAdvBudget,
  min
}) => (
  <div>
    <SmallFormItemInput
      colon={false}
      label={isProduct ? <LabelProduct /> : <LabelService />}
      name={name}
      rules={rules}>
      <InputNumber
        size={isProduct ? 'small' : 'middle'}
        precision={1}
        min={min || Number(process.env.REACT_APP_MIN_ADVBUDGET)}
        max={90}
        formatter={(value: any) => `${value}%`}
        parser={(value: any) => value.replace('%', '')}
        placeholder="%"
        onChange={(value) => handleChangeAdvBudget(value)}
      />
    </SmallFormItemInput>
    {isProduct ? <ProductPriorityBlock /> : <ServicePriorityBlock />}
  </div>
);
export default BudgetWithoutInitials;
