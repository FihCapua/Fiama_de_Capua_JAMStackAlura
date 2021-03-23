/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import db from '../../db.json';
import ProjectsScreen from '../../src/components/screen/ProjectsScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

function Projects() {
  return (
    <>
      <ProjectsScreen projects={db.projects} />
    </>
  );
}

export default websitePageHOC(Projects, {
  pageWrapperPops: {
    seoProps: {
      headTitle: 'Projetos',
    },
  },
});
