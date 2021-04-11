/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { BackgroundWrapper } from '../../commons/BackgroundWrapper/style/BackgroundWrapper';
import Footer from '../../commons/Footer';
// eslint-disable-next-line import/no-cycle
import Menu from '../../commons/Menu';
import { Box } from '../../foundation/Layout/Box';
import SEO from '../../commons/SEO';
import Modal from '../../commons/Modal';
import FormCadastro from '../../patterns/FormCadastro';

export const WebsitePageContext = React.createContext({
  toggleRegisterModal: () => {

  },
});

export default function WebsitePageWrapper(props) {
  const { children, seoProps } = props;
  const mockUserLogin = true;
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <WebsitePageContext.Provider
        value={{
          toggleRegisterModal: () => {
            setModalState(!isModalOpen);
          },
        }}
      >
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <SEO
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...seoProps}
        />
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
        >
          <Modal
            isOpen={isModalOpen}
            onClose={() => {
              setModalState(false);
            }}
          >
            {(propsDoModal) => (
              <FormCadastro propsDoModal={propsDoModal} />
            )}
          </Modal>
          <BackgroundWrapper>
            <Menu display={mockUserLogin} />
            {children}
          </BackgroundWrapper>
          <Footer />
        </Box>
      </WebsitePageContext.Provider>
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
