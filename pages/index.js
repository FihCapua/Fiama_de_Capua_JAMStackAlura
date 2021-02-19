import { BackgroundWrapper } from '../src/components/commons/BackgroundWrapper/style/BackgroundWrapper';
import Capa from '../src/components/commons/CapaWrapper';
import NavBar from '../src/components/commons/Cabecalho';
import Footer from '../src/components/commons/Footer';

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <BackgroundWrapper>
        <Capa />
        <NavBar />
        <Footer />
      </BackgroundWrapper>
    </div>
  )
}
