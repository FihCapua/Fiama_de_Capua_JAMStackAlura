/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const FooterWrapper = styled.div`
    background-color: ${function (props) {
    return props.theme.colors.tertiary.light.color;
  }};
    display: flex;
    justify-content: center;
`;

FooterWrapper.Icons = styled.div`
    background-color: ${function (props) {
    return props.theme.colors.background.dark.color;
  }};
    padding: 10px 20px;
`;
