import React from 'react';
// eslint-disable-next-line import/no-cycle
import { ContactWrapper } from './styles/ContactWrapper';

export default function Contact() {
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
      <ContactWrapper.Button>
        Entre em Contato
      </ContactWrapper.Button>
    </ContactWrapper>
  );
}
