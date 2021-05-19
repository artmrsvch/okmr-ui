import React, { FC } from 'react';
import { Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

interface LabelProductProps {
  min: number;
}

const LabelProduct: FC<LabelProductProps> = ({ min }) => (
  <>
    <span>
      Рекламный бюджет от `${min}`% до 90% &nbsp;
      <Tooltip
        title={`Рекомендуем: устанавливать рекламный бюджет от 10% и более. Чем больше рекламный бюджет, 
                    тем больше вовлеченность клиента в программу лояльности. Помните, что рекламный бюджет будет постепенно возвращаться Вам по реферальной программе, 
                    при любых покупках Ваших клиентов. Таким образом, Вы стимулируете клиента к активности, 
                    и получаете компенсацию рекламных затрат. Это выгодно всем!`}>
        <QuestionCircleOutlined />
      </Tooltip>{' '}
    </span>
  </>
);

export default LabelProduct;
