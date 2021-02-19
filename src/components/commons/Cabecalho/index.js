import React from 'react';
import { NavBar } from './styles/NavBar';
import { Logo } from '../../../theme/Logo/Logo';
import Text from '../../foundation/Text';

export default function Menu() {
  const links = [
    {
      texto: 'Sobre Mim',
      url: '/sobre'
    },
    {
      texto: 'Contato',
      url: '/contato'
    }
  ]

  return (
    <NavBar>
      <NavBar.LeftSide>
        <Logo />
      </NavBar.LeftSide>
      <NavBar.RightSide>
        {/* Percorrendo os links com map */}
        {links.map(function (link) {
          return (
            <ul key='1'>
              <li key={link.url}>
                <Text tag="a" variant="paragraph2" href={link.url}>
                  {link.texto}
                </Text>
              </li>
            </ul>
          )
        })}
      </NavBar.RightSide>
    </NavBar>
  )
}