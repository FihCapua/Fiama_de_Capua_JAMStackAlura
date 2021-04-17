import { css } from 'styled-components';
import { breakPointsMedia } from '../breakpointsMedia';

// eslint-disable-next-line import/prefer-default-export
export function propToStyle(propName) {
  // eslint-disable-next-line func-names
  return function (props) {
    const propValue = props[propName]; // string ou object

    if (typeof propValue === 'string' || typeof propValue === 'number') {
      return {
        // textAlign: props.textAlign
        // Objeto que tem como chave e valor o a propriedade dinâmica textAlign
        [propName]: propValue,
      };
    }

    if (typeof propValue === 'object') {
      // precisa receber um objeto de acordo c/ o valor especificado

      const breakpoints = {};

      if (propValue.xs) breakpoints.xs = { [propName]: propValue.xs };
      if (propValue.md) breakpoints.md = { [propName]: propValue.md };
      if (propValue.lg) breakpoints.lg = { [propName]: propValue.lg };
      if (propValue.xl) breakpoints.xl = { [propName]: propValue.xl };

      return breakPointsMedia(breakpoints);

      //     return css`
      //       ${breakPointsMedia({
      //   ...(propValue.xs && {
      //     xs: { [propName]: propValue.xs },
      //   }),
      //   ...(propValue.sm && {
      //     sm: { [propName]: propValue.sm },
      //   }),
      //   ...(propValue.md && {
      //     md: { [propName]: propValue.md },
      //   }),
      //   ...(propValue.lg && {
      //     lg: { [propName]: propValue.lg },
      //   }),
      //   ...(propValue.xl && {
      //     xl: { [propName]: propValue.xl },
      //   }),
      // })}
      //     `;
    }

    return {
      [propName]: props[propName],
    };
  };
}
