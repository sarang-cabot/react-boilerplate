import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      background: string;
    };
    space: string[];
    media: {
      small: string;
      medium: string;
      large: string;
    };
    fonts: {
      primary: string;
      colors: {
        medium: string;
      };
      weights: {
        light: number;
        normal: number;
        bold: number;
      };
      sizes: {
        xs: string;
        small: string;
        medium: string;
        large: string;
      };
    };
  }
}
