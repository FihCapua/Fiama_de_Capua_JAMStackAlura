import styled, { css } from 'styled-components';
import { breakPointsMedia } from '../../../../theme/utils/breakpointsMedia';
import { TextStylesVariantsMap } from '../../../foundation/Text';

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-family: ${({ theme }) => theme.fontFamily};
  background-color: ${function(props) {
    return props.theme.colors.primary.main.color
  }};
  padding: 0px 10px;

  ${breakPointsMedia({
        xs: css`
            justify-content: space-around;
            flex-wrap: nowrap;
        `,
        md: css`
          justify-content: space-between;
        `,
        lg: css`
        
        `,
    })}

  ${TextStylesVariantsMap.paragraph1};
`;

NavBar.LeftSide = styled.div`
  margin: -30px 0;

  ${breakPointsMedia({
        xs: css`
            width: 95%;
        `,
        md: css`
        
        `,
        lg: css`
          width: 65%;
          margin: -30px 170px;
        `,
        xl: css`
          margin: -30px 170px;
        `,
    })}
`;

NavBar.RightSide = styled.div`
    display: flex;
    ul {
      list-style-type: none;
    }
    li { 
      cursor: pointer;
    }
    a {
      color: ${function(props) {
        return props.theme.colors.secondary.main.contrastText
      }};
      text-decoration: none;
      transition: ${({ theme }) => theme.transition};
      &:hover,
      &:focus {
        color: ${function(props) {
          return props.theme.colors.tertiary.light.contrastText
        }}
      }
    }

    ${breakPointsMedia({
        xs: css`
          ul {
            width: 130px;
          }
        `,
        md: css`
        
        `,
        lg: css`
            margin: 0 100px;
        `,
    })}
`;