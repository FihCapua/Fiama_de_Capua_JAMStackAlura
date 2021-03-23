/* eslint-disable func-names */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { motion } from 'framer-motion';
import LazyLoad from 'react-lazyload';
import { Card } from './styles/ProjectCard';

const cardAnimation = {
  left: {
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
  },
  right: {
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
  },
};

export default function ProjectCard(props) {
  const {
    title,
    image,
    description,
    slug,
    direction,
  } = props;

  const CardDirection = Card[direction];

  return (
    <Card loading="lazy">
      <LazyLoad height={200}>
        <motion.div
          variants={cardAnimation[direction]}
          initial="hidden"
          animate="visible"
        >
          <CardDirection>
            <NextLink href={`/projects/${slug}`}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>
                <Card.CardTitle>{title}</Card.CardTitle>
                <Card.CardImage src={image} alt={title} />
              </a>
            </NextLink>
            <Card.CardText>
              {description}
            </Card.CardText>
          </CardDirection>
        </motion.div>
      </LazyLoad>
    </Card>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
};
