/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import { breakPointsMedia } from '../../../../theme/utils/breakpointsMedia';
import { TextStylesVariantsMap } from '../../../foundation/Text/index';

export const ContactWrapper = styled.div`
    display: flex;
    justify-content: center; 
    flex-wrap: wrap;
    margin: -5px 0;
    background-color: ${function (props) {
    return props.theme.colors.primary.main.color;
  }};  
    padding: 160px;
    ${breakPointsMedia({
    xs: css`
            width: 100%;
            padding: 90px;
        `,
    md: css`
            width: 90%;
            margin: 0 auto;
            margin-top: -5px;
        `,
    lg: css`
            width: 100%;
            padding: 160px;
        `,
    xl: css`
            width: 100%;
            margin: -5px 0;
            padding: 160px;
        `,
  })}
`;

ContactWrapper.Title = styled.h2`
    width: 100%;
    text-align: center;
    color: ${function (props) {
    return props.theme.colors.primary.main.contrastText;
  }};
    ${TextStylesVariantsMap.title}
    padding: 25px 0 0 0;
`;

ContactWrapper.Text = styled.p`
  width: 100%;
  text-align: center;
  color: ${function (props) {
    return props.theme.colors.secondary.main.color;
  }};
    ${TextStylesVariantsMap.paragraph1}
    ${breakPointsMedia({
    xs: css`
            width: 100%;
            margin: 10px;
            padding-bottom: 10px;
        `,
    md: css`
            width: 100%;
        `,
    lg: css`
            width: 95%;
            margin: 0;
        `,
    xl: css`
            width: 100%;
        `,
  })}
`;
