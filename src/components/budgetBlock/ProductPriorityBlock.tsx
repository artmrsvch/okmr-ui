import React, { FC } from 'react';
import { Checkbox, Form, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

interface ProductPriorityBlockProps {}

const ProductPriorityBlock: FC<ProductPriorityBlockProps> = () => (
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
);

export default ProductPriorityBlock;
