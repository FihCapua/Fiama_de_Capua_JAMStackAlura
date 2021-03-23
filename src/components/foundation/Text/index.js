import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Link from '../../commons/Link';
import { propToStyle } from '../../../theme/utils/propToStyle';

export const TextStylesVariantsMap = {
  title: css`
        font-size: ${({ theme }) => theme.typographyVariants.title.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.title.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.title.lineHeight};
    `,
  titleXS: css`
        font-size: ${({ theme }) => theme.typographyVariants.titleXS.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.titleXS.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.titleXS.lineHeight};
  `,
  paragraph1: css`
        font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
    `,
  paragraph2: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph2.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph2.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph2.lineHeight};
`,
  subTitle: css`
        font-size: ${({ theme }) => theme.typographyVariants.subTitle.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.subTitle.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.subTitle.lineHeight};
    `,
  smallestException: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
`,
  smallestParagraph: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallestParagraph.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.smallestParagraph.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.smallestParagraph.lineHeight};
    margin-left: ${({ theme }) => theme.typographyVariants.smallestParagraph.marginLeft};
`,
};

const TextBase = styled.span`
    ${(props) => TextStylesVariantsMap[props.variant]}
    ${propToStyle('color')}
    ${propToStyle('width')}
    ${propToStyle('margin')}
    ${propToStyle('fontSize')}
    ${propToStyle('textAlign')}
    ${propToStyle('marginBottom')}
`;

export default function Text({
  tag,
  variant,
  children,
  href,
  ...props
}) {
  if (href) {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <TextBase
        as={Link}
        href={href}
        variant={variant}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        {children}
      </TextBase>
    );
  }
  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  href: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
  href: '',
};
