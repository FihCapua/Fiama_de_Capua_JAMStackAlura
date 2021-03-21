/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { BackgroundWrapper } from '../src/components/commons/BackgroundWrapper/style/BackgroundWrapper';
import Capa from '../src/components/commons/CapaWrapper';
import NavBar from '../src/components/commons/Menu';
import Portfolio from '../src/components/commons/ProjectsWrapper';
import Contact from '../src/components/commons/ContactWrapper';
import Footer from '../src/components/commons/Footer';
import WebsitePageWrapper from '../src/components/wrappers/WebsitePage';

export default function Home() {
  return (
    <WebsitePageWrapper style={{
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
    >
      <BackgroundWrapper>
        <Capa />
        <NavBar />
        <Portfolio />
        <Contact />
        <Footer />
      </BackgroundWrapper>
    </WebsitePageWrapper>
  );
}
