/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { TextStylesVariantsMap } from '../../../../foundation/Text';

export const Card = styled.div`
    display: grid;
    grid-template-columns: 70%;
    justify-content: center;
    margin: 40px 0 100px 0;    
`;

Card.Left = styled.div`
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
`;

Card.Right = styled.div`
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
`;

Card.CardImage = styled.img`
    width: 400px;
    height: 310px;
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
`;
