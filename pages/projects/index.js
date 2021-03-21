/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import SEO from '../../src/components/commons/SEO';
import ProjectsScreen from '../../src/components/screen/ProjectsScreen';

export default function About() {
  const [userRepositories, setUserRepositories] = useState([]);

  async function getRespositories() {
    await fetch('https://api.github.com/users/FihCapua/repos')
      .then((serverResponse) => serverResponse.json())
      .then((data) => {
        setUserRepositories(data);
      });
  }

  useEffect(() => {
    getRespositories();
  }, []);

  return (
    <>
      <SEO headTitle="Projetos" />
      <ProjectsScreen repositories={userRepositories} />
    </>
  );
}