/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { TextStylesVariantsMap } from '../../foundation/Text';

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

ContactWrapper.Button = styled.button`
  border: none;
  padding: 10px;
  cursor: pointer;
  background-color: ${function (props) {
    return props.theme.colors.button.main.color;
  }}; 
  color: ${function (props) {
    return props.theme.colors.button.main.contrastText;
  }};
  border-radius: ${function (props) {
    return props.theme.borderRadius;
  }};  
  transition: opacity ${({ theme }) => theme.transition};
  ${TextStylesVariantsMap.paragraph2};
  &:hover,
  &:focus {
    opacity: .5;
  }
`;
