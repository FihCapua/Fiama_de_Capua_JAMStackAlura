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
          width: 60%;
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

NavBar.CentralSide = styled.div`
  display: flex;
    ul {
      list-style-type: none;
    }
    li { 
      cursor: pointer;
    }
    ${breakPointsMedia({
    xs: css`
          display: flex;
          flex-wrap: wrap;
          margin: 0;
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
          margin-left: -490px;
        `,
    lg: css`
            display: flex;
            flex-wrap: nowrap;
            margin: 0 100px;
        `,
  })}
`;

NavBar.RightSide = styled.div`
    cursor: pointer;
    text-align: center;
    margin-top: 16px;
    margin-left: -110px;
    width: 20%;
${breakPointsMedia({
    xs: css`    
          margin-top: 53px;
          margin-left: -120px;
          width: 90%;
    `,
    sm: css`
          margin-left: -269px;
          margin-top: 50px;
          width: 40%;
        `,
    md: css`
          margin-left: -415px;
          margin-top: 16px;
        `,
    lg: css`
          margin-top: 16px;
          margin-left: -90px;
        `,
    xl: css`
          margin-top: 16px;
          margin-left: -110px;
          width: 20%;
        `,
  })}
`;
