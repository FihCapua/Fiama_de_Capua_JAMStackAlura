/* eslint-disable arrow-body-style */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../../foundation/Layout/Box';
import { Grid } from '../../foundation/Layout/Grid';
import { ProjectsWrapper } from '../../commons/ProjectsWrapper/styles';
import SectionTitle from '../../commons/ProjectsWrapper/SectionTitle';
import ProjectCard from '../../commons/ProjectsWrapper/Card';

export default function ProjectsScreen({ projects }) {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      width="100%"
    >
      <Grid.Container>
        <ProjectsWrapper>
          <SectionTitle />
          <ProjectsWrapper.Section>
            {projects.map((project, index) => {
              const direction = index % 2 === 0 || index === 0 ? 'right' : 'left';

              return (
                <ProjectCard
                  key={project.id}
                  direction={direction}
                  linkRepo={project.link}
                  title={project.title}
                  image={project.image}
                  description={project.description}
                  slug={project.slug}
                />
              );
            })}
          </ProjectsWrapper.Section>
        </ProjectsWrapper>
      </Grid.Container>
    </Box>
  );
}

ProjectsScreen.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  projects: PropTypes.array.isRequired,
};
