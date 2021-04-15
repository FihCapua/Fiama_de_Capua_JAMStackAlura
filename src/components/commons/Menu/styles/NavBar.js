/* eslint-disable func-names */
import styled, { css } from 'styled-components';
import { breakPointsMedia } from '../../../../theme/utils/breakpointsMedia';
import { TextStylesVariantsMap } from '../../../foundation/Text';

// eslint-disable-next-line import/prefer-default-export
export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-family: ${({ theme }) => theme.fontFamily};
  background-color: ${function (props) {
    return props.theme.colors.tertiary.light.color;
  }};
  height: 100px;
  ${TextStylesVariantsMap.paragraph1};
  ${breakPointsMedia({
    xs: css`
          justify-content: space-around;
          flex-wrap: wrap;
        `,
    md: css`
          justify-content: space-between;
        `,
    lg: css`
          justify-content: space-between;
        `,
  })}
`;

NavBar.WrapperMenu = styled.div`
  ${breakPointsMedia({
    md: css`
          margin: 0 -18px;
        `,
  })}
`;

NavBar.LeftSide = styled.div`
  padding: 10px;
  ${breakPointsMedia({
    xs: css`
          padding: 0;
        `,
    md: css`
          padding: 10px;
        `,
  })}
`;

NavBar.CentralSide = styled.div`
    display: flex;
    margin: 20px 100px;
    ul {
      list-style-type: none;
    }
    li { 
      cursor: pointer;
    }
    ${breakPointsMedia({
    xs: css`
          margin: -35px;
          margin-top: -35px;
        `,
    md: css`
          display: flex;
          margin: 15px 100px;
        `,
  })}
`;

NavBar.RightSide = styled.div`
    margin: 16px 30px;
`;
