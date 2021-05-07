import styled from 'styled-components';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import { xs } from '../../config/breakpoints';

export const CustomTabs = styled(Tabs)`
  .ant-tabs-tab {
    display: block;
    text-align: center;
    background-color: white;
    color: ${(props) => props.text || 'black'};
    border: 1px solid;
    border-radius: 4px;
    border-color: ${(props) =>
      props.border === 'default' ? '#999999' : props.border || '#1890ff'};
    padding: 4px;
    margin: 0 10px 0 0;
    min-width: 130px;

    @media screen and (max-width: ${xs}) {
      min-width: auto;
    }
  }

  .ant-tabs-tab-active {
    background-color: ${(props) => props.color || '#1890ff'};
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: white;
  }

  @media screen and (max-width: ${xs}) {
    flex-direction: column;
  }
}
`;
