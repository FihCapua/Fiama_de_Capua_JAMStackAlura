/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import SEO from '../../src/components/commons/SEO';
import db from '../../db.json';
import ProjectsScreen from '../../src/components/screen/ProjectsScreen';
import Menu from '../../src/components/commons/Menu';
import Footer from '../../src/components/commons/Footer';

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
