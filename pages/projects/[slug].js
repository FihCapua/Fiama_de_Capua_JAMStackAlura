import React from 'react';
import db from '../../db.json';
import ProjectDetails from '../../src/components/screen/ProjectsDetailScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

// eslint-disable-next-line react/prop-types
function ProjectsInternalPage({ project }) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <ProjectDetails
      project={project}
    />
  );
}

export default websitePageHOC(ProjectsInternalPage, {
  pageWrapperPops: {
    seoProps: {
      headTitle: 'Resumo do Projeto',
    },
  },
});

export async function getStaticPaths() {
  const projects = db.projects.filter((_, index) => index < 2);
  const projectsPaths = projects.map((project) => `/projects/${project.slug}`);

  return {
    paths: projectsPaths,
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  // eslint-disable-next-line no-shadow
  const project = db.projects.find((project) => project.slug === slug);

  return {
    props: {
      project,
    },
  };
}
