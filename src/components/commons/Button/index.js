/* eslint-disable func-names */
import styled, { css } from 'styled-components';
import { propToStyle } from '../../../theme/utils/propToStyle';
import { TextStylesVariantsMap } from '../../foundation/Text/index';

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.button`
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
  ${TextStylesVariantsMap.smallestException};
  
  &:hover,
  &:focus {
    opacity: .5;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }

  ${({ fullWidth }) => fullWidth && css`
    width: 60%;
  `};

  ${propToStyle('margin')}
  ${propToStyle('display')}
`;
