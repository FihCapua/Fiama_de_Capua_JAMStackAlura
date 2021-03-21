/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import SEO from '../../src/components/SEO';
import db from '../../db.json';
import Menu from '../../src/components/commons/Menu';
import Footer from '../../src/components/commons/Footer';
import ProjectsScreen from '../../src/components/commons/ProjectsWrapper';

export default function Projects() {
  return (
    <>
      <SEO headTitle="Projetos" />
      <Menu />
      <div>
        {db.projects.map((project, index) => (
          <ProjectsScreen
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
