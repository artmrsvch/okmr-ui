import styled from 'styled-components';
import { md, xs } from '../../config/breakpoints';
import { Colors } from '../../config/colors';

export const Container = styled.div`
  background-color: ${Colors.background};
  display: flex;
`;
export const Workspace = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
`;
export const Content = styled.main`
  height: calc(100% - 60px);
  width: 100%;
  padding: 9px;
  background: #eff4ff;
`;
export const ContentWrap = styled.div`
  padding: 20px;
  background: #ffffff;
  box-shadow: 0 0 12px rgba(0, 93, 226, 0.1);
  border-radius: 8px;
  overflow-x: auto;
`;

export const CheckedInput = styled.input`
  display: none;

  &:checked {
    & ~ .dashboard-workspace {
      .aside-toggle-header-label {
        .aside-menu-activation__close {
          display: block;
        }
        .aside-menu-activation__open {
          display: none;
        }
      }
    }

    & ~ .aside-menu {
      @media screen and (max-width: ${md}) {
        left: 0;
        top: 0;
        position: fixed;
        transition: all 0.5s;
        height: 100%;
        z-index: 101;

        bottom: 0;
        opacity: 1;
        padding: 0 10px 20px 10px;
      }

      @media screen and (max-width: ${xs}) {
        left: 0;
        top: 0;
        position: fixed;
        //transition: all 0.5s;
        height: 100%;
        z-index: 101;
        bottom: 0;
        width: 100%;
        opacity: 1;
        padding: 0 10px 20px 10px;

        .aside-menu__close {
          display: block;
        }
      }
    }
  }

  & ~ .aside-menu {
    @media screen and (max-width: ${md}) {
      position: fixed;
      left: -260px;
    }

    .aside-menu__mini-logo,
    .aside-menu__close {
      display: none;
    }
  }
`;
