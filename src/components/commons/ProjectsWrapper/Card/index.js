/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { motion } from 'framer-motion';
import LazyLoad from 'react-lazyload';
import { Card } from './styles/ProjectCard';

export default function ProjectCard() {
  const cardLeftAnimation = {
    hidden: {
      opacity: 0,
      x: '-500px',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        delay: 0.5,
      },
    },
  };

  const cardRightAnimation = {
    hidden: {
      opacity: 0,
      x: '500px',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        delay: 0.5,
      },
    },
  };

  return (
    <Card loading="lazy">
      <LazyLoad height={200}>
        <motion.div
          variants={cardLeftAnimation}
          initial="hidden"
          animate="visible"
        >
          <Card.Left>
            <a href="https://github.com/FihCapua/loja-de-fones">
              <Card.CardTitle>Loja de Fones</Card.CardTitle>
              <Card.CardImage src="https://fihcapua.github.io/portfolio/imgs/loja-fone.jpg" alt="Loja de Fones" />
            </a>
            <Card.CardText>
              Projeto criado na aula de Front End da Collab Code com HTML, CSS e JS
            </Card.CardText>
          </Card.Left>
        </motion.div>
      </LazyLoad>

      <LazyLoad height={300}>
        <motion.div
          variants={cardRightAnimation}
          initial="hidden"
          animate="visible"
        >
          <Card.Right>
            <a href="https://github.com/FihCapua/projeto-casa-criativa">
              <Card.CardTitle>Casa Criativa</Card.CardTitle>
              <Card.CardImage src="https://fihcapua.github.io/portfolio/imgs/casa-criativa.jpg" alt="Casa Criativa" />
            </a>
            <Card.CardText>
              Projeto com criação de páginas em HTML e CSS e JS e gerenciamento de dados em Node.js
            </Card.CardText>
          </Card.Right>
        </motion.div>
      </LazyLoad>

      <LazyLoad height={400}>
        <motion.div
          variants={cardLeftAnimation}
          initial="hidden"
          animate="visible"
        >
          <Card.Left>
            <a href="https://github.com/FihCapua/flappy-bird">
              <Card.CardTitle>Flappy Bird</Card.CardTitle>
              <Card.CardImage src="https://fihcapua.github.io/portfolio/imgs/flappy-bird.jpg" alt="Flappy Bird" />
            </a>
            <Card.CardText>
              Jogo do passarinho feito com base nas aulas do canal do DevSoutinho desenvolvido em JS
            </Card.CardText>
          </Card.Left>
        </motion.div>
      </LazyLoad>

      <LazyLoad height={500}>
        <motion.div
          variants={cardRightAnimation}
          initial="hidden"
          animate="visible"
        >
          <Card.Right>
            <a href="https://github.com/FihCapua/batuque-quiz">
              <Card.CardTitle>BatuqueQuiz</Card.CardTitle>
              <Card.CardImage src="https://fihcapua.github.io/portfolio/imgs/batuquequiz.png" alt="BatuqueQuiz" />
            </a>
            <Card.CardText>
              Projeto criado durante a Segunda Imersão Alura de - React, Styled Components e Next.JS
            </Card.CardText>
          </Card.Right>
        </motion.div>
      </LazyLoad>
    </Card>
  );
}
