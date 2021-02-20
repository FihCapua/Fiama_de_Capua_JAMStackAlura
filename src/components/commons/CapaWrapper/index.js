import React from 'react';
import { CapaWrapper } from './styles/CapaWrapper';

export default function Capa() {
  return (
    <CapaWrapper>
      <CapaWrapper.Content>
        <CapaWrapper.Title>
          Olá, sou Fiama de Cápua
      </CapaWrapper.Title>
        <CapaWrapper.Subtitle>
          Desenvolvedora Front-End
      </CapaWrapper.Subtitle>
        <CapaWrapper.Paragraph>
          Projetando e construindo páginas web.<br />
          Espremendo os miolos com  HTML, CSS, JS e React.<br />
          Mas no final sempre da certo!
      </CapaWrapper.Paragraph>
      </CapaWrapper.Content>
    </CapaWrapper>
  )
}
