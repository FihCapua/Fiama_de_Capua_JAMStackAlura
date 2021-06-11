import React from 'react';
import PropTypes from 'prop-types';
import reactParser from 'react-html-parser';
import { Box } from '../../foundation/Layout/Box';
import { Grid } from '../../foundation/Layout/Grid';
import { SectionTitle } from '../../commons/ProjectsWrapper/SectionTitle/styles/SectionTitle';
import { DetailsWrapper } from '../../commons/ProjectsWrapper/styles/detailscreen';

export default function ProjectDetails({ project }) {
  const description = reactParser(project.description);
  const link = reactParser(project.link);

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
              src={project.image.url}
            />
            <DetailsWrapper.Content>
              <DetailsWrapper.Text>
                {description}
              </DetailsWrapper.Text>
              <DetailsWrapper.Link>
                {link}
              </DetailsWrapper.Link>
            </DetailsWrapper.Content>
          </DetailsWrapper.Section>
        </DetailsWrapper>
      </Grid.Container>
    </Box>
  );
}

ProjectDetails.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    slug: PropTypes.string,
  }).isRequired,
};
