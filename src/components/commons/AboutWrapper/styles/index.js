/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import { breakPointsMedia } from '../../../../theme/utils/breakpointsMedia';
import { TextStylesVariantsMap } from '../../../foundation/Text';

export const AboutWrapper = styled.div`
    display: flex;
    justify-content: center; 
    flex-wrap: wrap;
    margin: -5px 0;
    background-color: ${function (props) {
    return props.theme.colors.primary.main.color;
  }};  
    padding-bottom: 50px;
`;

AboutWrapper.Title = styled.h2`
    width: 100%;
    text-align: center;
    color: ${function (props) {
    return props.theme.colors.primary.main.contrastText;
  }};
    ${TextStylesVariantsMap.title}
    padding: 35px 0;
`;

AboutWrapper.Content = styled.div`
    display: flex;
    justify-content: center;

    ${breakPointsMedia({
    xs: css`
            flex-wrap: wrap;
        `,
    md: css`
            flex-wrap: nowrap;
        `,
  })}
`;

AboutWrapper.Image = styled.img`
    background: url(https://mir-s3-cdn-cf.behance.net/user/276/d2ff2d30408991.56edd9abea663.jpg) center center / cover rgb(28, 24, 20);
    width: 300px;
    height: 300px;
    border-radius: 50%;
    box-shadow: ${({ theme }) => theme.boxShadow};

    ${breakPointsMedia({
    md: css`
            margin: 40px 15px;
            width: 250px;
            height: 250px;
        `,
  })}
`;

AboutWrapper.Text = styled.p`
    color: ${function (props) {
    return props.theme.colors.secondary.main.color;
  }};
    ${TextStylesVariantsMap.paragraph1}
    text-align: justify;
    margin: 60px 60px;

    ${breakPointsMedia({
    xs: css`
            width: 65%;
        `,
    md: css`
            width: 50%;
        `,
    lg: css`
            width: 45%;
        `,
    xl: css`
            width: 30%;
        `,
  })}
`;
