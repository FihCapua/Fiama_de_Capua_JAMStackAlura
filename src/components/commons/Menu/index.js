/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import Text from '../../foundation/Text';
import { NavBar } from './styles/NavBar';
import { Logo } from '../../../theme/Logo/Logo';
// eslint-disable-next-line import/no-cycle
import { WebsitePageContext } from '../../wrappers/WebsitePage/index';

export default function Menu(props) {
  const websitePageContext = React.useContext(WebsitePageContext);

  const { display } = props;
  const links = [
    {
      texto: 'Sobre Mim',
      url: '/about',
    },
    {
      texto: 'Projetos',
      url: '/projects',
    },
  ];

  if (!display) return false;

  return (
    <NavBar>
      <NavBar.LeftSide>
        <NextLink href="/">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>
            <Logo />
          </a>
        </NextLink>
      </NavBar.LeftSide>
      <NavBar.WrapperMenu>
        <NavBar.CentralSide>
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
          <NavBar.RightSide>
            <button
              type="button"
              name="contato"
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                outline: '0',
                cursor: 'pointer',
              }}
            >
              <Text
                tag="a"
                variant="paragraph1"
                style={{
                  color: '#e1a7f9',
                }}
                onClick={() => websitePageContext.toggleRegisterModal()}
              >
                Contato
              </Text>
            </button>
          </NavBar.RightSide>
        </NavBar.CentralSide>
      </NavBar.WrapperMenu>
    </NavBar>
  );
}

Menu.propTypes = {
  display: PropTypes.bool.isRequired,
};
