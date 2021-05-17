import React, { FC } from 'react';
import { FormInstance } from 'rc-field-form';
import { ButtonWithMargin, BudgetContainer } from './styled';

interface BudgetWithInitialsProps {
  defaultForItem?: number;
  handleChangeGeneralValue: (inputAdvBudgetValue: number) => void;
  form: FormInstance;
  name?: string;
}

const BudgetWithInitials: FC<BudgetWithInitialsProps> = ({
  defaultForItem,
  handleChangeGeneralValue,
  form,
  name
}) => {
  const inputAdvBudgetValue = Number(form.getFieldValue(name)) / 100;
  return (
    <div>
      <div>Для всех товаров установлен общий рекламный бюджет</div>
      <BudgetContainer>
        <p>{Math.round(Number(defaultForItem) * 1000) / 10}%</p>
        <ButtonWithMargin
          onClick={() => handleChangeGeneralValue(inputAdvBudgetValue)}
          size="small"
          type="primary"
          ghost>
          Изменить
        </ButtonWithMargin>
      </BudgetContainer>
    </div>
  );
};

export default BudgetWithInitials;
