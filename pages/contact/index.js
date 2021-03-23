/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import Contact from '../../src/components/commons/ContactWrapper';
import { Box } from '../../src/components/foundation/Layout/Box';
import { Grid } from '../../src/components/foundation/Layout/Grid';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

function HomeScreen() {
  return (
    <>
      <Box
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Grid.Container>
          <Contact />
        </Grid.Container>
      </Box>
    </>
  );
}

export default websitePageHOC(HomeScreen, {
  pageWrapperPops: {
    seoProps: {
      headTitle: 'Contato',
    },
  },
});
