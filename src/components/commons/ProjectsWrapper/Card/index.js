import React from 'react';
import { Card } from './styles/ProjectCard';

export default function ProjectCard() {
    return (
        <Card>
            <a href="https://github.com/FihCapua/loja-de-fones">
                <Card.CardImageText>Loja de Fones</Card.CardImageText>
                <Card.CardImageFront src="https://fihcapua.github.io/portfolio/imgs/loja-fone.jpg" alt="Loja de Fones" />
            </a>

            <a href="https://github.com/FihCapua/projeto-casa-criativa">
                <Card.CardImageText>Casa Criativa</Card.CardImageText>
                <Card.CardImageFront src="https://fihcapua.github.io/portfolio/imgs/casa-criativa.jpg" alt="Casa Criativa" />
            </a>

            <a href="https://github.com/FihCapua/flappy-bird">
                <Card.CardImageText>Flappy Bird</Card.CardImageText>
                <Card.CardImageFront src="https://fihcapua.github.io/portfolio/imgs/flappy-bird.jpg" alt="Flappy Bird" />
            </a>

            <a href="https://github.com/FihCapua/batuque-quiz">
                <Card.CardImageText>BatuqueQuiz</Card.CardImageText>
                <Card.CardImageFront src="https://fihcapua.github.io/portfolio/imgs/batuquequiz.png" alt="BatuqueQuiz" />
            </a>
        </Card>
    )
}