/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { BackgroundWrapper } from '../../commons/BackgroundWrapper/style/BackgroundWrapper';
import Footer from '../../commons/Footer';
import Menu from '../../commons/Menu';
import { Box } from '../../foundation/Layout/Box';
import SEO from '../../SEO';

export default function WebsitePageWrapper({
  children,
  seoProps,
  menuProps,
}) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <SEO {...seoProps} />
      <Box
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="center"
        width="100%"
      >
        <BackgroundWrapper>
          {menuProps.display && <Menu />}
          {children}
          <Footer />
        </BackgroundWrapper>
      </Box>
    </>
  );
}

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  children: PropTypes.node.isRequired,
};
