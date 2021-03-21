/* eslint-disable arrow-body-style */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { BackgroundWrapper } from '../../commons/BackgroundWrapper/style/BackgroundWrapper';
import Menu from '../../commons/Menu';
import { Box } from '../../foundation/Layout/Box';
import { Grid } from '../../foundation/Layout/Grid';
import Footer from '../../commons/Footer';
import { AboutWrapper } from '../../commons/AboutWrapper/styles';

export default function AboutScreen({ repositories }) {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
    >
      <BackgroundWrapper>
        <Menu />
        <Grid.Container>
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
            <AboutWrapper.Repo>
              <AboutWrapper.Title>
                Meus Repositórios
              </AboutWrapper.Title>
              {repositories.map((repository, element) => {
                return (
                  <>
                    <AboutWrapper.RepoDetails>
                      <AboutWrapper.RepoText key={element}>{repository.name}</AboutWrapper.RepoText>
                      <a target="_blank" rel="noreferrer" href={repository.html_url}>
                        <AboutWrapper.RepoLink key={element}>{repository.full_name}</AboutWrapper.RepoLink>
                      </a>
                    </AboutWrapper.RepoDetails>
                  </>
                );
              })}
            </AboutWrapper.Repo>
          </AboutWrapper>
        </Grid.Container>
        <Footer />
      </BackgroundWrapper>
    </Box>
  );
}

AboutScreen.propTypes = {
  // eslint-disable-next-line react/require-default-props
  repositories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    full_name: PropTypes.string.isRequired,
  })),
};
