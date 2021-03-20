/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import NextLink from 'next/link';
import { NavBar } from './styles/NavBar';
import { Logo } from '../../../theme/Logo/Logo';
import Text from '../../foundation/Text';

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
        {links.map((link) => (
          <ul key="1">
            <li key={link.url}>
              <NextLink href={link.url}>
                <Text tag="a" variant="paragraph1" href={link.url}>
                  {link.texto}
                </Text>
              </NextLink>
            </li>
          </ul>
        ))}
      </NavBar.RightSide>
    </NavBar>
  );
}
