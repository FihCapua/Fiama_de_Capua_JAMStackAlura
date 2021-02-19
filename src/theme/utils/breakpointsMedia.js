import theme from '../index';
import { css } from 'styled-components';

const { breakpoints } = theme;

export function breakPointsMedia(cssByBreakpoints) {
    const breakpointsName = Object.keys(cssByBreakpoints);
    return breakpointsName.map((breakpointsName) => {
        return css`
            @media screen and (min-width: ${breakpoints[breakpointsName]}px) {
                ${cssByBreakpoints[breakpointsName]}
            }
        `
    })
}