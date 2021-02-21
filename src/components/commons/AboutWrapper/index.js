/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { AboutWrapper } from './styles/AboutWrapper';

export default function About() {
  return (
    <AboutWrapper>
      <AboutWrapper.Title>
        Sobre Mim
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
