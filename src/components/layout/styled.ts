import styled from 'styled-components';
import { md } from '../../config/breakpoints';
import { Colors } from '../../config/colors';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Colors.background};
  display: flex;
`;
export const Workspace = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
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
        transform: rotate(180deg);
      }
    }

    & ~ .aside-menu {
      width: 65px;

      @media screen and (min-width: ${md}) {
        .navigation-link-text {
          font-size: 0;
          margin-left: 0;
        }
        .navigation-item__link {
          justify-content: center;
        }
        .navigation-link__content--with-widget {
          .navigation-link-icon {
            display: none;
          }
        }

        .aside-menu__logo {
          display: none;
        }
        .aside-menu__mini-logo {
          display: block;
        }
      }

      @media screen and (max-width: ${md}) {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 101;
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
      width: 0;
      opacity: 0;
      padding: 0;
    }

    .aside-menu__mini-logo,
    .aside-menu__close {
      display: none;
    }
  }
`;
