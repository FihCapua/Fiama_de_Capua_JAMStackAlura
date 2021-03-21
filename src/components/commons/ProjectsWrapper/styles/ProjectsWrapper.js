/* eslint-disable func-names */
import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ProjectsWrapper = styled.div`
    margin-top: -30px;
    background-color: ${function (props) {
    return props.theme.colors.background.dark.color;
  }};
    padding-bottom: 90px;
`;
