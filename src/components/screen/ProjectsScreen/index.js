/* eslint-disable arrow-body-style */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { BackgroundWrapper } from '../../commons/BackgroundWrapper/style/BackgroundWrapper';
import { Box } from '../../foundation/Layout/Box';
import { Grid } from '../../foundation/Layout/Grid';
import { ProjectsWrapper } from '../../commons/ProjectsWrapper/styles/ProjectsWrapper';
import Text from '../../foundation/Text';

export default function ProjectsScreen({
  image,
  title,
  description,
  link,
}) {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      width="100%"
    >
      <BackgroundWrapper>
        <Grid.Container>
          <ProjectsWrapper>
            <ProjectsWrapper.Title>{title}</ProjectsWrapper.Title>
            <ProjectsWrapper.Text>{description}</ProjectsWrapper.Text>
            <ProjectsWrapper.RepoLink>{link}</ProjectsWrapper.RepoLink>
            <Image
              src={image}
              alt="texto alternativo"
              width="500"
              height="500"
            />
          </ProjectsWrapper>
        </Grid.Container>
      </BackgroundWrapper>
    </Box>
  );
}

Text.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.node,
};
