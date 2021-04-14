import React from 'react';
import styled, { css } from 'styled-components';
import { breakPointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const SVG = styled.svg`
    position: relative;
    top: 0;
    left: 64%;
    stroke: ${({ theme }) => theme.colors.background.main.color};
    ${breakPointsMedia({
    xs: css`
            left: 85%;
        `,
    md: css`
            left: 64%;
        `,
  })}
`;

export function CloseButton() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <SVG
      role="button"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVG>
  );
}
