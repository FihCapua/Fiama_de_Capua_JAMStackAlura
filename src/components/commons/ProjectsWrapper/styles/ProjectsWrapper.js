import styled, { css } from 'styled-components';
import { breakPointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const ProjectsWrapper = styled.div`
    margin-top: -25px;
    background-color: ${function (props) {
        return props.theme.colors.background.dark.color
    }};
    padding-bottom: 90px;
`;