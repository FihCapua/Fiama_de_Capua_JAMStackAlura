/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import { breakPointsMedia } from '../../../../theme/utils/breakpointsMedia';
import { TextStylesVariantsMap } from '../../../foundation/Text/index';

export const ContactWrapper = styled.div`
    display: flex;
    justify-content: center; 
    flex-wrap: wrap;
    ${breakPointsMedia({
    xs: css`
            width: 100%;
        `,
    md: css`
            width: 90%;
        `,
    lg: css`
            width: 100%;
        `,
    xl: css`
            width: 100%;
        `,
  })}
`;

ContactWrapper.Title = styled.h2`
    width: 100%;
    text-align: center;
    color: ${function (props) {
    return props.theme.colors.secondary.main.contrastText;
  }};
    ${TextStylesVariantsMap.titleXS}
    padding: 25px 0 0 0;
    ${breakPointsMedia({
    xs: css`
            padding: 0;
        `,
    md: css`
            width: 100%;
        `,
    lg: css`
            width: 95%;
        `,
    xl: css`
            width: 100%;
        `,
  })}
`;

ContactWrapper.Text = styled.p`
  width: 85%;
  text-align: center;
  color: ${function (props) {
    return props.theme.colors.secondary.main.color;
  }};
    ${TextStylesVariantsMap.paragraph1}
    ${breakPointsMedia({
    xs: css`
            width: 100%;
        `,
    md: css`
            width: 100%;
        `,
    lg: css`
            width: 85%;
        `,
    xl: css`
            width: 100%;
        `,
  })}
`;
