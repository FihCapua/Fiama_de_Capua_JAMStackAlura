/* eslint-disable func-names */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';
import ProjectCard from './Card';
import SectionTitle from './SectionTitle/index';

const ProjectsWrapper = styled.div`
    margin-top: -30px;
    background-color: ${function (props) {
    return props.theme.colors.background.dark.color;
  }};
    padding-bottom: 90px;
`;

export default function Portfolio() {
  return (
    <ProjectsWrapper id="projects">
      <SectionTitle />
      <ProjectCard />
    </ProjectsWrapper>
  );
}
