import { typographyVariants } from './typographVariants';

// Não precisa de export por ser um arquivo guia interno
const colors = {
  background: {
    dark: {
      color: '#0b092e',
    },
    main: {
      color: '#F2F2F2',
    },
  },
  borders: {
    main: {
      color: '#ba60f3',
    },
  },
  button: {
    main: {
      color: '#ca6ded',
      contrastText: '#14133c',
    },
  },
  primary: {
    main: {
      color: '#140f3c',
      contrastText: '#dd5fff',
    },
  },
  secondary: {
    main: {
      color: '#fff',
      contrastText: '#ba5ae0',
    },
  },
  tertiary: {
    main: {
      color: '#4c0f65',
      contrastText: '#fff',
    },
    light: {
      color: '#2c245f',
      contrastText: '#e1a7f9',
    },
  },
  fourth: {
    main: {
      contrastText: '#4d4d4d',
    },
  },
  modes: {
    light: {},
  },
};

export default {
  colors,
  typographyVariants,
  breakpoints: {
    xs: 0,
    sm: 425,
    md: 768,
    lg: 1024,
    xl: 1360,
  },
  borderRadius: '5px',
  fontFamily: '\'DM Mono\', sans-serif',
  transition: '200ms ease-in-out',
  boxShadow: '#020208 -2px 5px 5px',
};
