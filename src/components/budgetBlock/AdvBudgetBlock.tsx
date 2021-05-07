import React, { FC, useState, memo } from 'react';
import { Button, Checkbox, Col, Form, InputNumber, Tooltip } from 'antd';
import { FormInstance } from 'rc-field-form';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import Icon, { InfoCircleOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { CheckboxStyle } from '../checkbox/styled';
import { BudgetContainer, SmallFormItemInput, StyledTooltip } from './styled';

interface AdvBudgetFormBlockProps {
  initialAdv?: number;
  isProduct?: boolean;
  isEditing?: boolean;
  name: string;
  form: FormInstance;
  defaultForItem?: number;
}

const FormItemCheckbox = styled(Form.Item)`
  margin-left: 5px;

  .ant-form-item-control {
    justify-content: flex-end;
  }
`;

const ButtonWithMargin = styled(Button)`
  margin-left: 15px;
`;
const BlackShiftContainer = styled.div`
  color: black;
`;

const ColorizedIcon = styled(Icon)`
  color: #1890ff;
  margin-left: 5px;
`;

const isWindowVisible = (object: AdvBudgetFormBlockProps): boolean => {
  if (!object.isEditing) {
    if (object.defaultForItem && object.defaultForItem > 0) {
      return true;
    }
  }
  if (
    object.isEditing &&
    !object.isProduct &&
    object.defaultForItem &&
    object.defaultForItem > 0 &&
    object.form.getFieldValue('isPriorityAdvBudget')
  ) {
    return false;
  }
  if (object.isEditing && !object.isProduct && object.defaultForItem && object.defaultForItem > 0) {
    return true;
  }
  if (object.isEditing) {
    if (!object.form.getFieldValue('isPriorityAdvBudget')) {
      if (!object.defaultForItem) {
        return false;
      }
    }
  }
  if (object.isEditing) {
    if (!object.form.getFieldValue('isPriorityAdvBudget')) {
      return true;
    }
  }
  return false;
};

const AdvBudgetFormBlock: FC<AdvBudgetFormBlockProps> = ({
  initialAdv,
  isProduct,
  name,
  form,
  isEditing,
  defaultForItem
}) => {
  const isVisible = isWindowVisible({
    initialAdv,
    isProduct,
    name,
    form,
    isEditing,
    defaultForItem
  });
  const [isBudgetVisible, setBudgetVisible] = useState<boolean>(isVisible);
  const inputAdvBudgetValue = Number(form.getFieldValue(name)) / 100;
  const handleChangeGeneralValue = () => {
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
        <div>
          <div>Для всех товаров установлен общий рекламный бюджет</div>
          <BudgetContainer>
            <p>{Math.round(Number(defaultForItem) * 1000) / 10}%</p>
            <ButtonWithMargin onClick={handleChangeGeneralValue} size="small" type="primary" ghost>
              Изменить
            </ButtonWithMargin>
          </BudgetContainer>
        </div>
      ) : (
        <div />
      )}

      {!isBudgetVisible ? (
        <div>
          <SmallFormItemInput
            colon={false}
            label={
              isProduct ? (
                <span>
                  Рекламный бюджет от {Number(process.env.REACT_APP_MIN_ADVBUDGET || 1)}% до 90%
                  &nbsp;
                  <StyledTooltip
                    title={`Рекомендуем: устанавливать рекламный бюджет от 10% и более. Чем больше рекламный бюджет, 
                    тем больше вовлеченность клиента в программу лояльности. Помните, что рекламный бюджет будет постепенно возвращаться Вам по реферальной программе, 
                    при любых покупках Ваших клиентов. Таким образом, Вы стимулируете клиента к активности, 
                    и получаете компенсацию рекламных затрат. Это выгодно всем!`}>
                    <QuestionCircleOutlined />
                  </StyledTooltip>{' '}
                </span>
              ) : (
                <span>
                  Рекламный бюджет&nbsp;
                  <StyledTooltip
                    title={`Рекомендуем: устанавливать рекламный бюджет от 10% и более. Чем больше рекламный бюджет, 
                    тем больше вовлеченность клиента в программу лояльности. Помните, что рекламный бюджет будет постепенно возвращаться Вам по реферальной программе, при любых покупках Ваших клиентов. 
                    Таким образом, Вы стимулируете клиента к активности, 
                    и получаете компенсацию рекламных затрат. Это выгодно всем!`}>
                    <QuestionCircleOutlined />
                  </StyledTooltip>
                </span>
              )
            }
            name={name}
            rules={createRules()}>
            <InputNumber
              size={isProduct ? 'small' : 'middle'}
              precision={1}
              min={Number(process.env.REACT_APP_MIN_ADVBUDGET || 1)}
              max={90}
              formatter={(value: any) => `${value}%`}
              parser={(value: any) => value.replace('%', '')}
              placeholder="%"
              onChange={(value) => handleChangeAdvBudget(value)}
            />
          </SmallFormItemInput>
          {isProduct ? (
            <Form.Item
              label={
                <>
                  Приоритет рекламного бюджета&nbsp;
                  <Tooltip
                    title={`Если установлен приоритет по РБ у товара,
              расчеты будут вестись по значению РБ в товаре,
              вне зависимости от установки общего флага РБ для всех товаров в настройках магазина`}>
                    <QuestionCircleOutlined />
                  </Tooltip>
                </>
              }
              valuePropName="checked"
              name="isPriorityAdvBudget">
              <Checkbox />
            </Form.Item>
          ) : (
            <FormItemCheckbox
              name="isPriorityAdvBudget"
              valuePropName="checked"
              initialValue={false}>
              <CheckboxStyle>
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
              </CheckboxStyle>
            </FormItemCheckbox>
          )}
        </div>
      ) : null}
    </Col>
  );
};
export default memo(AdvBudgetFormBlock);
