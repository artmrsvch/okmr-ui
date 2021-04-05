import styled from 'styled-components';

export const HeaderStyled = styled.header<{ supplier?: boolean }>`
  padding: 0 20px;
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  ${({ supplier }) => (supplier ? 'padding: 0 35px;' : '')}
  background: #fff;
  border-bottom: 1px solid #d7e7ff;
`;
export const WidgetBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;
export const AsideToggleLabel = styled.label`
  cursor: pointer;
  width: 26px;
  height: 26px;
  transition: 0.2s;
`;
