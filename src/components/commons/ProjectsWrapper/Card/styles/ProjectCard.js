import styled from 'styled-components';
import { TextStylesVariantsMap } from '../../../../foundation/Text';

export const Card = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 25px;
`;

Card.CardImageFront = styled.img`
    width: 250px;
    height: 200px;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.boxShadow};
    margin: 0 10px;
    transition: transform 0.5s ease;
    &:hover,
    &:focus {
        transform: scale(1.1);
        transition: transform 0.5s ease;
    }
`;

Card.CardImageText = styled.p`
    color: ${function (props) {
        return props.theme.colors.tertiary.main.contrastText
    }};
    text-align: center;
    ${TextStylesVariantsMap.paragraph1}
    text-decoration: none;
`;