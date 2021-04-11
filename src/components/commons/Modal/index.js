import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle, css } from 'styled-components';
import { motion } from 'framer-motion';
import { CloseButton } from './CloseButton';

const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background: rgba(0,0,0,0.7);
    position: fixed;
    top: 0;
    left: 0;
    right:0;
    bottom: 0;
    margin: auto;
    overflow: hidden;
    z-index: 100;
    transition: .3s;

    ${({ isOpen }) => {
    if (isOpen) {
      return css`
                opacity: 1;
                pointer-events: all;
            `;
    }
    return css`
            opacity: 0;
            pointer-events: none;
        `;
  }}
`;

const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

function Modal({ isOpen, onClose, children }) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <ModalWrapper
      isOpen={isOpen}
      onClick={(event) => {
        const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
        if (!isSafeArea) {
          onClose();
        }
      }}
    >

      {isOpen && <LockScroll />}

      <motion.div
        variants={{
          visible: {
            y: 80,
          },
          hidden: {
            y: 640,
          },
        }}
        animate={isOpen ? 'visible' : 'hidden'}
        transition={{
          duration: 0.5,
        }}
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          marginLeft: '-20px',
        }}
      >
        <CloseButton />
        {children({
          'data-modal-safe-area': true,
        })}
      </motion.div>
    </ModalWrapper>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
