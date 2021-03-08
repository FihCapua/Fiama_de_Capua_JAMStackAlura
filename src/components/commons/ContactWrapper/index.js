import React from 'react';
import { ContactWrapper } from './styles/ContactWrapper';
import Modal from '../Modal';
import FormCadastro from '../../patterns/FormCadastro';
import { Button } from '../Button';
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
        de acordo com a sua necessidade?
        Bora lá!
      </ContactWrapper.Text>

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

      <Button
        onClick={() => {
          setModalState(!isModalOpen);
        }}
      >
        Clique Aqui!
      </Button>
    </ContactWrapper>
  );
}
