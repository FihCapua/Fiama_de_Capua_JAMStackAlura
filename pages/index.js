/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import Capa from '../src/components/commons/CapaWrapper';
import Portfolio from '../src/components/commons/ProjectsWrapper';
import Contact from '../src/components/commons/ContactWrapper';
import WebsitePageWrapper from '../src/components/wrappers/WebsitePage';
// import About from './about/about';

export default function Home() {
  return (
    <WebsitePageWrapper
      seoProps={{
        headTitle: 'Home',
      }}
      menuProps={{
        display: true,
      }}
    >
      <Capa />
      <Portfolio />
      <Contact />
    </WebsitePageWrapper>
  );
}
