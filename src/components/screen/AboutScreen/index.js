/* eslint-disable arrow-body-style */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../../foundation/Layout/Box';
import { Grid } from '../../foundation/Layout/Grid';
import { AboutWrapper } from '../../commons/AboutWrapper/styles';

export default function AboutScreen({ repositories }) {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
    >
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
          <AboutWrapper.Title>
            Meus Repositórios
          </AboutWrapper.Title>
          <AboutWrapper.Repo>
            {repositories.map((repository, index) => {
              return (
                <>
                  <AboutWrapper.RepoDetails>
                    {/* eslint-disable-next-line react/no-array-index-key */}
                    <AboutWrapper.RepoText key={index}>{repository.name}</AboutWrapper.RepoText>
                    <a target="_blank" rel="noreferrer" href={repository.html_url}>
                      {/* eslint-disable-next-line react/no-array-index-key */}
                      <AboutWrapper.RepoLink key={index}>{repository.full_name}</AboutWrapper.RepoLink>
                    </a>
                  </AboutWrapper.RepoDetails>
                </>
              );
            })}
          </AboutWrapper.Repo>
        </AboutWrapper>
      </Grid.Container>
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
