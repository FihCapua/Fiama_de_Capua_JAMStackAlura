import React from 'react';
import ProjectCard from './Card';
import { ProjectsWrapper } from './styles/ProjectsWrapper';
import SectionTitle from './SectionTitle/index';


export default function Portfolio() {
    return (
        <ProjectsWrapper>
            <SectionTitle />
            <ProjectCard />
        </ProjectsWrapper>
    )
}