import * as React from 'react';
import styled from 'styled-components';
import CartLogo from 'src/icons/CartLogo.svg';
import SuLogo from 'src/icons/SuLogo.svg';
import WorldLogo from 'src/icons/WorldLogo.svg';
import { Button } from '../components';

const StyledLogoContainer = styled.div`
  display: inline-flex;
  height: 24px;
  align-self: center;
`;
const StyledLogoPart = styled.div`
  margin-top: 2.5px;
  margin-left: 5px;
`;

interface SVGLogoProps {
  linkTo?: string;
}

const SvgLogo = ({ linkTo, ...restProps }) => {
  if (linkTo) {
    return (
      <StyledLogoContainer {...restProps}>
        <div>
          <img alt="cart logo" src={CartLogo} />
        </div>
        <Button type="link" style={{ display: 'inline-flex' }} href={linkTo}>
          <StyledLogoPart>
            <img alt="su" src={SuLogo} />
          </StyledLogoPart>
          <div>
            <img alt="world" src={WorldLogo} />
          </div>
        </Button>
      </StyledLogoContainer>
    );
  }
  return (
    <StyledLogoContainer {...restProps}>
      <div>
        <img alt="cart logo" src={CartLogo} />
      </div>

      <StyledLogoPart>
        <img alt="su" src={SuLogo} />
      </StyledLogoPart>
      <div>
        <img alt="world" src={WorldLogo} />
      </div>
    </StyledLogoContainer>
  );
};

export default SvgLogo;
