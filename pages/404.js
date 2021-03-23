/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import NextLink from 'next/link';
import { Lottie } from '@crello/react-lottie';
import constructAnimation from './animation/page-construction.json';
import { Box } from '../src/components/foundation/Layout/Box';
import Text from '../src/components/foundation/Text';
import { Button } from '../src/components/commons/Button';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function Page404() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Box
      display="flex"
      justifyContent="center"
      flexWrap="wrap"
      backgroundColor="#140f3c"
    >
      <Lottie
        width="800px"
        height="500px"
        display="flex"
        justifyContent="center"
        className="lottie-container basic"
        config={{ animationData: constructAnimation, loop: true, autoplay: true }}
      />

      <Text
        variant="title"
        tag="h1"
        fontSize="25px"
        margin="0 0 35px 0"
        width="100%"
        textAlign="center"
        color="#ffffff"
      >
        Ops<br />
        Não há ninguém aqui além dos construtores. <br />
        Volte mais tarde!
      </Text>
      <NextLink href="/">
        <Button
          width="100px"
          margin="-15px 0 25px 0"
          color="#ffffff"
        >
          Voltar
        </Button>
      </NextLink>
    </Box>
  );
}

export default websitePageHOC(Page404, {
  pageWrapperPops: {
    seoProps: {
      headTitle: 'Erro',
    },
  },
});
