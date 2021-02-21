/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Card } from './styles/ProjectCard';

export default function ProjectCard() {
  return (
    <Card>
      <a href="https://github.com/FihCapua/loja-de-fones">
        <Card.CardText>Loja de Fones</Card.CardText>
        <Card.CardImage src="https://fihcapua.github.io/portfolio/imgs/loja-fone.jpg" alt="Loja de Fones" />
      </a>

      <a href="https://github.com/FihCapua/projeto-casa-criativa">
        <Card.CardText>Casa Criativa</Card.CardText>
        <Card.CardImage src="https://fihcapua.github.io/portfolio/imgs/casa-criativa.jpg" alt="Casa Criativa" />
      </a>

      <a href="https://github.com/FihCapua/flappy-bird">
        <Card.CardText>Flappy Bird</Card.CardText>
        <Card.CardImage src="https://fihcapua.github.io/portfolio/imgs/flappy-bird.jpg" alt="Flappy Bird" />
      </a>

      <a href="https://github.com/FihCapua/batuque-quiz">
        <Card.CardText>BatuqueQuiz</Card.CardText>
        <Card.CardImage src="https://fihcapua.github.io/portfolio/imgs/batuquequiz.png" alt="BatuqueQuiz" />
      </a>
    </Card>
  );
}
