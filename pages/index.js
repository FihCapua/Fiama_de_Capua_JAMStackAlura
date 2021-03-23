/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import Capa from '../src/components/commons/CapaWrapper';
import SEO from '../src/components/commons/SEO';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function HomeScreen() {
  return (
    <>
      <SEO headTitle="Home" />
      <Capa />
    </>
  );
}

export default websitePageHOC(HomeScreen, {
  pageWrapperPops: {
    seoProps: {
      headTitle: 'Home',
    },
  },
});
