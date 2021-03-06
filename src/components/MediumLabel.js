import styled from 'styled-components';
import mobile from '../Responsive/Mobile';

const MediumLabel = styled.h3`
  color: ${({ color }) => color || '#FFFFFF'};
  display: block;
  font-weight: ${({ weight }) => weight || '600'};
  font-size: ${({ fontSize }) => fontSize || '20px'};
  text-align: ${({ align }) => align || 'left'};
  padding: 5px 0;
  ${({ firstToUpperCase }) =>
    firstToUpperCase &&
    `
  &:first-letter {
    text-transform: uppercase;
  }
  `}
  @media ${mobile.tablet} {
    font-size: ${({ fontSize }) => fontSize || '23px'};
  }
  @media ${mobile.laptop} {
    font-size: ${({ fontSize }) => fontSize || '26px'};
  } 
  @media ${mobile.laptopL} {
    font-size: ${({ fontSize }) => fontSize || '29px'};
  }
`;

export default MediumLabel;