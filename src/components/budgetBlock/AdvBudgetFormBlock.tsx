import React, { FC, useState } from 'react';
import { Col } from 'antd';
import { FormInstance } from 'rc-field-form';
import checkVisibilityBlock from './helper';
import BudgetWithoutInitials from './BudgetWithoutInitials';
import BudgetWithInitials from './BudgetWithInitials';

export interface AdvBudgetFormBlockProps {
  initialAdv?: number;
  isProduct?: boolean;
  isEditing?: boolean;
  name: string;
  form: FormInstance;
  defaultForItem?: number;
  min?: number;
}

export const AdvBudgetFormBlock: FC<AdvBudgetFormBlockProps> = ({
  initialAdv,
  isProduct,
  name,
  form,
  isEditing,
  defaultForItem,
  min
}) => {
  const isVisible = checkVisibilityBlock({
    initialAdv,
    isProduct,
    name,
    form,
    isEditing,
    defaultForItem,
    min
  });
  const [isBudgetVisible, setBudgetVisible] = useState<boolean>(isVisible);
  const handleChangeGeneralValue = (inputAdvBudgetValue: number) => {
    setBudgetVisible(false);
    if (inputAdvBudgetValue) {
      form.setFieldsValue({
        advBudgetPercent: Number(inputAdvBudgetValue) * 100
      });
    } else {
      form.setFieldsValue({
        advBudgetPercent: Number(defaultForItem) * 100
      });
    }
  };

  const handleChangeAdvBudget = (value?: number | string | null) => {
    if ((!value && defaultForItem) || (value === 0 && defaultForItem)) {
      form.setFieldsValue({ isPriorityAdvBudget: false });
      form.setFieldsValue({
        advBudgetPercent: Number(defaultForItem) * 100
      });
    } else if (!value && !defaultForItem) {
      form.setFieldsValue({
        advBudgetPercent: Number(process.env.REACT_APP_MIN_ADVBUDGET)
      });
    } else form.setFieldsValue({ isPriorityAdvBudget: true });
  };

  const createRules = () => {
    if ((!isEditing && !defaultForItem && !initialAdv) || (isEditing && !defaultForItem)) {
      return [
        {
          required: true,
          message: 'Необходимо указать рекламный бюджет'
        }
      ];
    }
    return [];
  };

  return (
    <Col>
      {isBudgetVisible ? (
        <BudgetWithInitials
          form={form}
          defaultForItem={defaultForItem}
          handleChangeGeneralValue={handleChangeGeneralValue}
          name={name}
        />
      ) : (
        <div />
      )}

      {!isBudgetVisible ? (
        <BudgetWithoutInitials
          isProduct={isProduct}
          rules={createRules()}
          name={name}
          handleChangeAdvBudget={handleChangeAdvBudget}
          min={min}
        />
      ) : null}
    </Col>
  );
};
