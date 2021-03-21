/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import NextLink from 'next/link';
import Text from '../../foundation/Text';
import { NavBar } from './styles/NavBar';
import { Logo } from '../../../theme/Logo/Logo';

export default function Menu() {
  const links = [
    {
      texto: 'Sobre Mim',
      url: '/about/about',
    },
    {
      texto: 'Projetos',
      url: '/projects',
    },
    {
      texto: 'Contato',
      url: '/contact',
    },
  ];

  return (
    <NavBar>
      <NavBar.LeftSide>
        <Logo />
      </NavBar.LeftSide>
      <NavBar.RightSide>
        {/* Percorrendo os links com map */}
        {links.map((link, index) => {
          const key = link.texto + index;

          return (
            <ul key={key}>
              <li key={link.url}>
                <NextLink href={link.url}>
                  <Text tag="a" variant="paragraph1" href={link.url}>
                    {link.texto}
                  </Text>
                </NextLink>
              </li>
            </ul>
          );
        })}
      </NavBar.RightSide>
    </NavBar>
  );
}
