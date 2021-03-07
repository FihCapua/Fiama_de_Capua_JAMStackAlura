import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

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
  subTitle: css`
        font-size: ${({ theme }) => theme.typographyVariants.subTitle.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.subTitle.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.subTitle.lineHeight};
    `,
};

const TextBase = styled.span`
        ${(props) => TextStylesVariantsMap[props.variant]}
`;

export default function Text({ tag, variant, children }) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <TextBase
      as={tag}
      variant={variant}
    >
      {/* por ser um componente de texto, recebe tudo q é passado por parametro */}
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  // eslint-disable-next-line react/require-default-props
  tag: PropTypes.string.isRequired,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

// padrões
Text.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  tag: 'span',
  variant: 'paragraph1',
};
