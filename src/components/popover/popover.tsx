import React from 'react';
import { Popover } from 'antd';
import { TooltipPlacement } from 'antd/es/tooltip';
import SvgQuestionCircle from '../../icons/QuestionCircle';
import {PopoverWrapper, WrapperButton} from './styled'
import { Colors } from '../../config/colors';

export type Trigger = 'hover' | 'click' | 'focus'

export interface QuestionPopoverProps {
  trigger?: Trigger | Trigger[]
  placement?: TooltipPlacement
}

const QuestionPopover: React.FC<QuestionPopoverProps> = ({ children,
                                                           trigger,
                                                           placement
}) => (
  <div>
    <Popover
      placement={placement ??'top'}
      content={<PopoverWrapper>{children}</PopoverWrapper>}
      trigger={trigger ?? 'click'}
    >
      <WrapperButton>
        <SvgQuestionCircle style={{fill: Colors.blue}} />
      </WrapperButton>
    </Popover>
  </div>
);

export default QuestionPopover;
