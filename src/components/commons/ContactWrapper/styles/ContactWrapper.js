/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { TextStylesVariantsMap } from '../../../foundation/Text/index';

export const ContactWrapper = styled.div`
    display: flex;
    justify-content: center; 
    flex-wrap: wrap;
    margin: -5px 0;
    background-color: ${function (props) {
    return props.theme.colors.primary.main.color;
  }};  
    padding-bottom: 50px;
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
`;
