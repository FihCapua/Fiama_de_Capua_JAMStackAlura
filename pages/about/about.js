/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import AboutScreen from '../../src/components/screen/AboutScreen';

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
      {userRepositories && <AboutScreen repositories={userRepositories} />}
    </>
  );
}
