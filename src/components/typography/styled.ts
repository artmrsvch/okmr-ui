import styled from "styled-components";
import { Colors } from '../../config/colors';
import { xs } from '../../config/breakpoints';

export const Title = styled.h1`
  font-size: 38px;
  color: ${Colors.black};
  font-weight: bold;
  margin-bottom: 30px;

  @media screen and (max-width: ${xs}) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

export const Subtitle = styled.h2`
  color: ${Colors.black};
  font-weight: bold;
  font-size: 20px;

  @media screen and (max-width: ${xs}) {
    font-size: 18px;
  }
`;

export const H3 = styled.h3`
  color: ${Colors.black};
  font-weight: bold;
  font-size: 16px;
    
`;

export const H4 = styled.h4`
  color: ${Colors.black};
  font-weight: bold;
  font-size: 14px;

`;

export const Paragraph = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: ${Colors.black};
`
