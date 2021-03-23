import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../../foundation/Layout/Box';
import { Grid } from '../../foundation/Layout/Grid';
import { SectionTitle } from '../../commons/ProjectsWrapper/SectionTitle/styles/SectionTitle';
import { DetailsWrapper } from '../../commons/ProjectsWrapper/styles/detailscreen';

export default function ProjectDetails({ project }) {
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <Box
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      width="100%"
    >
      <Grid.Container>
        <DetailsWrapper>
          <SectionTitle>
            {project.title}
          </SectionTitle>
          <DetailsWrapper.Section>
            <DetailsWrapper.ImgSlug
              src={project.image}
            />
            <DetailsWrapper.Content>
              <DetailsWrapper.Title>
                {project.description}
              </DetailsWrapper.Title>
              <DetailsWrapper.Text>
                Visite o site:
              </DetailsWrapper.Text>
              <DetailsWrapper.Link>
                <a
                  style={{
                    color: '#ffffff',
                  }}
                  target="_blank"
                  rel="noreferrer"
                  href={project.link}
                >
                  {project.link}
                </a>
              </DetailsWrapper.Link>
            </DetailsWrapper.Content>
          </DetailsWrapper.Section>
        </DetailsWrapper>
      </Grid.Container>
    </Box>
  );
}

ProjectDetails.propTypes = {
  project: PropTypes.string.isRequired,
};
