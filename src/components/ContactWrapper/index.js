import React from 'react';
import { ContactWrapper } from './styles/ContactWrapper';
import Modal from '../commons/Modal';
import { Box } from '../foundation/Layout/Box';
// eslint-disable-next-line import/no-cycle

export default function Contact() {
  const [isModalOpen, setModalState] = React.useState(false);
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <ContactWrapper>
      <ContactWrapper.Title>
        Vamos bater um papo?
      </ContactWrapper.Title>
      <ContactWrapper.Text>
        Vamos criar juntos uma solução para o seu projeto,
        <br />
        e de acordo com a sua necessidade?
        Bora lá!
      </ContactWrapper.Text>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalState(false);
        }}
      >
        {(propsDoModal) => (
          <Box
            backgroundColor="white"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...propsDoModal}
          >
            <div>
              Teste!
            </div>
          </Box>
        )}
      </Modal>

      <ContactWrapper.Button
        onClick={() => {
          setModalState(!isModalOpen);
        }}
      >
        Entre em Contato
      </ContactWrapper.Button>
    </ContactWrapper>
  );
}
