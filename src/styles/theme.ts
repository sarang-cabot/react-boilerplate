import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#064a18',
    background: '#aee6be',
  },
  // spacing system from https://lukebrown.dev/writing/how-to-create-a-spacing-system-with-styled-components
  space: [
    '0.25rem',
    '0.5rem',
    '0.75rem',
    '1rem',
    '1.5rem',
    '2rem',
    '3rem',
    '4rem',
    '6rem',
    '8rem',
    '12rem',
    '16rem',
    '24rem',
  ],
  media: {
    small: '1170px',
    medium: '768px',
    large: '450px',
  },
  fonts: {
    primary: '"Open Sans", Arial, sans-serif',
    colors: {
      medium: 'black',
    },
    weights: {
      light: 300,
      normal: 400,
      bold: 600,
    },
    sizes: {
      xs: '1rem',
      small: '1.3rem',
      medium: '1.6rem',
      large: '1.8rem',
    },
  },
};
export default theme;
