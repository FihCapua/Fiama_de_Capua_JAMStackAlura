/* eslint-disable func-names */
import styled, { css } from 'styled-components';
import { breakPointsMedia } from '../../../../theme/utils/breakpointsMedia';
import { TextStylesVariantsMap } from '../../../foundation/Text';

// eslint-disable-next-line import/prefer-default-export
export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-family: ${({ theme }) => theme.fontFamily};
  background-color: ${function (props) {
    return props.theme.colors.tertiary.light.color;
  }};
  padding: 0px 10px;
  ${TextStylesVariantsMap.paragraph1};

  ${breakPointsMedia({
    xs: css`
            justify-content: space-around;
            flex-wrap: nowrap;
        `,
    md: css`
          justify-content: space-between;
        `,
    lg: css`
        justify-content: space-between;
        `,
  })}
`;

NavBar.LeftSide = styled.div`
  margin: -9px 0;

  ${breakPointsMedia({
    xs: css`
          width: 95%;
          margin: 33px 0;
        `,
    md: css`
          margin-left: 30px;
        `,
    lg: css`
          width: 65%;
          margin: -9px 120px;
        `,
    xl: css`
          margin: -9px 170px;
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
      color: ${function (props) {
    return props.theme.colors.tertiary.light.contrastText;
  }};
      text-decoration: none;
      transition: ${({ theme }) => theme.transition};
      &:hover,
      &:focus {
        color: ${function (props) {
    return props.theme.colors.secondary.main.contrastText;
  }}
      }
    }
    ${TextStylesVariantsMap.smallestException};

    ${breakPointsMedia({
    xs: css`
          display: flex;
          flex-wrap: wrap;
          margin: 0 20px;
          ul {
            width: 150px;
          }
    `,
    sm: css`
          display: flex;
          flex-wrap: wrap;
          margin: 0 15px;
          ul {
            width: 130px;
          }
        `,
    md: css`
          display: flex;
          flex-wrap: wrap;
          margin: 0 50px;
        `,
    lg: css`
            display: flex;
            flex-wrap: nowrap;
            margin: 0 100px;
        `,
  })}
`;
