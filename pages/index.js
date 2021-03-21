/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { BackgroundWrapper } from '../src/components/commons/BackgroundWrapper/style/BackgroundWrapper';
import Capa from '../src/components/commons/CapaWrapper';
import Menu from '../src/components/commons/Menu';
import Portfolio from '../src/components/commons/ProjectsWrapper';
import Contact from '../src/components/commons/ContactWrapper';
import Footer from '../src/components/commons/Footer';

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
    >
      <BackgroundWrapper>
        <Capa />
        <Menu />
        <Portfolio />
        <Contact />
        <Footer />
      </BackgroundWrapper>
    </div>
  );
}
