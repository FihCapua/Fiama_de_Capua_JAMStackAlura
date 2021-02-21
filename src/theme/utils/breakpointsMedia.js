import { css } from 'styled-components';
import theme from '../index';

export const { breakpoints } = theme;

export function breakPointsMedia(cssByBreakpoints) {
  const breakpointsName = Object.keys(cssByBreakpoints);
  // eslint-disable-next-line no-shadow
  return breakpointsName.map((breakpointsName) => css`
            @media screen and (min-width: ${breakpoints[breakpointsName]}px) {
                ${cssByBreakpoints[breakpointsName]}
            }
        `);
}
