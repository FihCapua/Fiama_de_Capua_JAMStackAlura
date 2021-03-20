/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Lottie } from '@crello/react-lottie';
import constructAnimation from './animation/page-construction.json';
import { Box } from '../src/components/foundation/Layout/Box';
import Text from '../src/components/foundation/Text';
import { Button } from '../src/components/commons/Button';

export default function Page404() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Box
      display="flex"
      justifyContent="center"
      flexWrap="wrap"
      margin="-110px 0"
    >
      <Lottie
        width="800px"
        height="550px"
        display="flex"
        justifyContent="center"
        className="lottie-container basic"
        config={{ animationData: constructAnimation, loop: true, autoplay: true }}
      />

      <Text
        variant="title"
        tag="h1"
        fontSize="25px"
        color="tertiary.light"
        margin="35px 0"
        width="100%"
        textAlign="center"
      >
        Ooops<br />
        Não há ninguém aqui além dos construtores. <br />
        Volte mais tarde!
      </Text>
      <Button
        width="100px"
        margin="-15px 0 10px 0"
        color="#ffffff"
      >
        Voltar
      </Button>
    </Box>
  );
}
