/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import SEO from '../../src/components/commons/SEO';
import AboutScreen from '../../src/components/screen/AboutScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

function About() {
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
      <SEO headTitle="Sobre Mim" />
      {userRepositories && <AboutScreen repositories={userRepositories} />}
    </>
  );
}

export default websitePageHOC(About, {
  pageWrapperPops: {
    seoProps: {
      headTitle: 'Sobre Mim',
    },
  },
});
