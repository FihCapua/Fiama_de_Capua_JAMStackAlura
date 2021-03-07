/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ProjectCard from './Card';
import { ProjectsWrapper } from './styles/ProjectsWrapper';
import SectionTitle from './SectionTitle/index';

export default function Portfolio() {
  return (
    <ProjectsWrapper id="projects">
      <SectionTitle />
      <ProjectCard />
    </ProjectsWrapper>
  );
}
