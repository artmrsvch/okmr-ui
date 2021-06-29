import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { xl } from '../../../config/breakpoints';

export const Aside = styled.aside`
  border-right: 1px solid #d7e7ff;
  min-width: 240px;
  height: 100vh;
  background: #eff4ff;
  transition: 0.2s;
  box-sizing: border-box;
  padding: 0 10px 20px 10px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 911;
`;

export const AsideHeadline = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid #d7e7ff;
  height: 60px;
  flex: 1;
`;
export const AsideLogo = styled.div`
  @media screen and (max-width: ${xl}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 10px;
  }
`;
export const AsideHeadlineRole = styled.span`
  margin-left: 5px;
  font-size: 11px;
  text-transform: uppercase;
  font-weight: bold;
  color: black;
  margin-bottom: -0.15em;
`;
export const AsideCloseIcon = styled.label`
  cursor: pointer;
  width: 20px;
  height: 20px;
`;
export const InlineFlexDiv = styled.a`
  display: inline-flex;
  align-items: center;
`;

export const NavigationWrapper = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  height: calc(100% - 60px);
  max-height: -webkit-fill-available;
  -webkit-overflow-scrolling: touch;
`;

export const NavigationList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavigationItem = styled.li<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  height: 43px;
  line-height: 30px;
  margin: 0 5px;
  padding: 4px;

  .anticon {
    vertical-align: middle;
    font-size: 20px;
  }

  svg path,
  svg circle {
    fill: #a8ccff;
  }

  ${({ isActive }) =>
    isActive
      ? `
      padding: 0;
      color: #005de2;
      .navigation-item__link {
        color: #005DE2 !important;
        background: white;
        border: 1px solid #d7e7ff;
        box-shadow: 0px 2px 4px rgba(0, 93, 226, 0.06);
        border-radius: 8px;
        align-items: center;
        height: 36px;
        padding: 4px;
      }
      
      svg path, svg circle {
        fill: #005de2
      }
      `
      : ''}
`;
export const NavigationCountWidget = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 30px;
  min-height: 30px;
  border-radius: 50%;
  background: #ff7f03;
  color: white;
  font-weight: 600;
`;

export const NavigationLinkText = styled.span`
  margin-left: 10px;
  transition: 0.2s;
  //color: #6fa7f5;
  pointer-events: auto;
  line-height: normal;
  display: inline-flex;
  align-items: center;
  font-weight: 600;

  .navigation-item--active & {
    color: #005de2;
  }
`;

export const NavigationLink = styled<any>(Link)`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  font-weight: bold;
  ${({ disabled }) =>
    disabled
      ? `pointer-events: none;
 color: #BFC8D1;
 
 svg path,
  svg circle {
    fill: #BFC8D1!important;
  }
  `
      : 'color: #6fa7f5;'}
  width: 100%;
  line-height: 1.5;
`;
export const NavigationExternalLink = styled.a`
  color: #6fa7f5;
  display: flex;
  align-items: center;
  background: transparent;
  font-weight: bold;
  width: 100%;
  line-height: 1.5;
`;

export const NavigationLinkContent = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
export const NavigationLinkIcon = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
`;
export const WidgetWrapper = styled.div`
  padding: 0;
  background: transparent;
  height: 30px;
  width: 30px;
  text-align: center;

  div:first-child {
    padding: 2px;
  }
`;

export const NavigationDivider = styled.div`
  width: 90%;
  min-height: 1px;
  background: #d7e7ff;
  margin: 13px 0;
`;
