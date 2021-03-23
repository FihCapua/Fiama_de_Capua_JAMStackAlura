/* eslint-disable func-names */
import styled, { css } from 'styled-components';
import { breakPointsMedia } from '../../../../theme/utils/breakpointsMedia';
import { TextStylesVariantsMap } from '../../../foundation/Text';

// eslint-disable-next-line import/prefer-default-export
export const DetailsWrapper = styled.div`
    margin-top: -32px;
    background-color: ${function (props) {
    return props.theme.colors.background.dark.color;
  }};
    padding-bottom: 50px;
`;

DetailsWrapper.Section = styled.div`
    margin: 50px;
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    width: 75%;
    ${breakPointsMedia({
    xs: css`
            width: 95%;
            display: flex;
            flex-wrap: wrap;
            margin: 0;
        `,
    md: css`
            width: 80%;
            margin-left: 70px;
        `,
    lg: css`
            display: grid;
            justify-content: center;
            grid-template-columns: 1fr 1fr;
            width: 80%;
            margin: 30px;
            margin-left: 110px;
        `,
    xl: css`
            width: 75%;
            margin: 50px;
            margin-left: 160px;
        `,
  })}
`;

DetailsWrapper.Title = styled.h2`
    width: 100%;
    text-align: center;
    color: ${function (props) {
    return props.theme.colors.primary.main.contrastText;
  }};
    ${TextStylesVariantsMap.title}
    padding: 35px 0;
`;

DetailsWrapper.ImgSlug = styled.img`
    width: 400px;
    height: 300px;
    border-radius: 10px;
    margin-left: 60px;
    ${breakPointsMedia({
    xs: css`
            width: 250px;
            height: 200px;
            margin-left: 10px;
        `,
    md: css`
            width: 300px;
            height: 220px;
        `,
    lg: css`
            width: 350px;
            height: 270px;
        `,
    xl: css`
            width: 400px;
            height: 300px;
        `,
  })}
`;

DetailsWrapper.Content = styled.div`
    width: 75%;
    ${breakPointsMedia({
    xs: css`
            width: 100%;
            padding: 5px;
        `,
    md: css`
            width: 50%;
        `,
    lg: css`
            width: 80%;
        `,
    xl: css`
            width: 75%;
        `,
  })}
`;

DetailsWrapper.Title = styled.p`
    color: ${function (props) {
    return props.theme.colors.secondary.main.color;
  }};
    ${TextStylesVariantsMap.paragraph1}
`;

DetailsWrapper.Text = styled.p`
    width: 100%;
    color: ${function (props) {
    return props.theme.colors.primary.main.contrastText;
  }};
    ${TextStylesVariantsMap.paragraph1}
`;

DetailsWrapper.Link = styled.div`
    width: 100%;
    ${TextStylesVariantsMap.paragraph1}
    ${breakPointsMedia({
    xs: css`
            width: 100%;
            ${TextStylesVariantsMap.paragraph2}
        `,
    md: css`
            width: 50%;
            ${TextStylesVariantsMap.paragraph1}
        `,
    lg: css`
            width: 80%;
        `,
    xl: css`
            width: 100%;
        `,
  })}
`;
