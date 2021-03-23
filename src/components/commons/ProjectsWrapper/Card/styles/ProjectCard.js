/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import { TextStylesVariantsMap } from '../../../../foundation/Text';
import { breakPointsMedia } from '../../../../../theme/utils/breakpointsMedia';

export const Card = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 75%;
    justify-content: center;
    margin: 40px 0 100px 0;   

    ${breakPointsMedia({
    xs: css`
            gap: 80px;
            margin: 40px 0 15px 0;
    `,
    sm: css`
            width: 100%;
            gap: 150px;
            margin: 40px 0 30px 0;
        `,
    md: css`
            width: 100%;
            grid-template-columns: 90%;
            margin: 40px 0 30px 0;
        `,
    lg: css`
            width: 100%;
            grid-template-columns: 80%;
        `,
    xl: css`
            width: 100%;
            grid-template-columns: 75%;
            margin: 40px 0 150px 0;
    `,
  })} 
`;

Card.left = styled.div`
    float: left;
    width: 400px;
    height: 200px;
    border-radius: ${({ theme }) => theme.borderRadius};
    margin: 0 10px;
    transition: transform 0.5s ease;
    margin-bottom: 80px;
    &:hover,
    &:focus {
        transform: scale(1.1);
        transition: transform 0.5s ease;
    }

    ${breakPointsMedia({
    xs: css`
            width: 85%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        `,
    md: css`
            width: 300px;
        `,
    lg: css`
            width: 350px
        `,
    xl: css`
            width:400px;
    `,
  })} 
`;

Card.right = styled.div`
    float: right;
    width: 400px;
    height: 200px;
    margin: 0 10px;
    transition: transform 0.5s ease;
    margin-bottom: 110px;
    &:hover,
    &:focus {
        transform: scale(1.1);
        transition: transform 0.5s ease;
    }

    ${breakPointsMedia({
    xs: css`
            width: 85%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        `,
    md: css`
            width: 300px;
        `,
    lg: css`
            width: 350px
        `,
    xl: css`
            width:400px;
    `,
  })} 
`;

Card.CardImage = styled.img`
    width: 400px;
    height: 310px;

    ${breakPointsMedia({
    xs: css`
            width: 180px;
            height: 150px;
        `,
    sm: css`
            width: 250px;
            height: 200px;
        `,
    md: css`
            width: 300px;
            height: 250px;
        `,
    lg: css`
            width: 350px;
            height: 300px;
        `,
    xl: css`
            width:400px;
            height: 300px;
    `,
  })} 
`;

Card.CardTitle = styled.p`
    color: ${function (props) {
    return props.theme.colors.tertiary.main.contrastText;
  }};
    text-align: center;
    ${TextStylesVariantsMap.subTitle}
    text-decoration: none;
    background-color: ${function (props) {
    return props.theme.colors.tertiary.light.color;
  }};
    padding: 10px 0;
    margin: 0;
    border-radius: ${({ theme }) => theme.borderRadius};
`;

Card.CardText = styled.p`
    color: ${function (props) {
    return props.theme.colors.tertiary.main.contrastText;
  }};
    text-align: left;
    ${TextStylesVariantsMap.smallestException}
    background-color: ${function (props) {
    return props.theme.colors.tertiary.light.color;
  }};
    padding: 20px;
    margin: -5px 0;
    border-radius: ${({ theme }) => theme.borderRadius};

    ${breakPointsMedia({
    xs: css`
            padding: 10px;
            width: 183px;
        `,
    sm: css`
            padding: 15px;
            width: 255px;
        `,
    md: css`
            padding: 18px;
            width: 300px;
        `,
    lg: css`
            padding: 20px;
            width: 360px;
        `,
    xl: css`
            padding: 20px;
            width: 400px;
            ${TextStylesVariantsMap.paragraph1}
    `,
  })} 
`;
