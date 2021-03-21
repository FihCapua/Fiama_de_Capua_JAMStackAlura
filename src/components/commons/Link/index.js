/* eslint-disable func-names */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NextLink from 'next/link';

const StyledLink = styled.a`
  text-decoration: none;
  color:${function (props) {
    return props.theme.colors.tertiary.light.contrastText;
  }};
      transition: ${({ theme }) => theme.transition};
      &:hover,
      &:focus {
        color: ${function (props) {
    return props.theme.colors.secondary.main.contrastText;
  }};
      }
`;

export default function Link({ children, href, ...props }) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <NextLink href={href} passHref>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <StyledLink {...props}>
        {children}
      </StyledLink>
    </NextLink>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
