import styled from 'styled-components';
import { Select } from 'antd';
import { xs } from '../../config/breakpoints';

export const ResponsiveSelect = styled(Select as any)`
  min-width: 300px;
  border-radius: 4px;
  @media (max-width: ${xs}) {
    width: 100%;
  }
`;
