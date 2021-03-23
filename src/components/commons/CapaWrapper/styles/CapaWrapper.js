/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import { breakPointsMedia } from '../../../../theme/utils/breakpointsMedia';
import { TextStylesVariantsMap } from '../../../foundation/Text';

export const CapaWrapper = styled.div`
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

CapaWrapper.Content = styled.div`
    width: 40%;
    margin: 0 auto;
    background-color: ${function (props) {
    return props.theme.colors.background.dark.color;
  }};
    opacity: 0.9;
    border: 3px dashed ${function (props) {
    return props.theme.colors.borders.main.color;
  }};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 25px;

    ${breakPointsMedia({
    xs: css`
            width: 90%;
        `,
    md: css`
            width: 70%;
        `,
    lg: css`
            width: 55%;
        `,
    xl: css`
            width: 40%;
        `,
  })}
`;

CapaWrapper.Title = styled.h1`
    text-align: center;
    color: ${function (props) {
    return props.theme.colors.primary.main.contrastText;
  }};
    ${TextStylesVariantsMap.title}

    ${breakPointsMedia({
    xs: css`
            ${TextStylesVariantsMap.titleXS}
        `,
    md: css`
            ${TextStylesVariantsMap.title}
        `,
    lg: css`
            ${TextStylesVariantsMap.title}
        `,
    xl: css`
            ${TextStylesVariantsMap.title}
        `,
  })}
`;

CapaWrapper.Subtitle = styled.h2`
    margin-top: 20px;
    text-align: center;
    color: ${function (props) {
    return props.theme.colors.primary.main.contrastText;
  }};
    ${TextStylesVariantsMap.subTitle}
`;

CapaWrapper.Paragraph = styled.p`
    color: ${function (props) {
    return props.theme.colors.tertiary.main.contrastText;
  }};
    margin-top: 25px;
    text-align: center;
    ${TextStylesVariantsMap.paragraph1}
    ${breakPointsMedia({
    xs: css`
            ${TextStylesVariantsMap.paragraph2}
        `,
    md: css`
            ${TextStylesVariantsMap.paragraph1}
        `,
    lg: css`
            ${TextStylesVariantsMap.paragraph1}
        `,
    xl: css`
            ${TextStylesVariantsMap.paragraph1}
        `,
  })}
`;
