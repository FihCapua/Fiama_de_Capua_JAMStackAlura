/* eslint-disable max-len */
import React from 'react';
import { AboutWrapper } from '../../src/components/commons/AboutWrapper/styles';

export default function About() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <AboutWrapper>
      <AboutWrapper.Title>
        Quem sou eu?
      </AboutWrapper.Title>
      <AboutWrapper.Content>
        <AboutWrapper.Image />
        <AboutWrapper.Text>
          Trabalhei 6 anos como web designer atuando em agências de marketing digital, e empresas.
          Em busca de novos desafios e experiências optei pela transição da minha carreira como front-end em 2019,
          dando continuidade ao meu projeto de aprendizado e de troca de conhecimentos na área de tecnologia,
          desenvolvimento e comunicação.
        </AboutWrapper.Text>
      </AboutWrapper.Content>
    </AboutWrapper>
  );
}
