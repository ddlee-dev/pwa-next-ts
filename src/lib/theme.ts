import { DefaultTheme, ThemeProvider } from 'styled-components';

const lightTheme = {
  bg: {
    primary: '#eff0f5',
    secondary: '#ffffff'
  },
  text: {
    primary: '#050505',
    secondary: '#2f3037'
  }
};

const darkTheme = {
  bg: {
    primary: '#050505',
    secondary: '#111111'
  },
  text: {
    primary: '#fbfbfc',
    secondary: '#e3e4e8'
  }
};

const defaultTheme = {
  fontSizes: {
    body: '17px'
  },
  fontWeights: {
    body: 400,
    subheading: 500,
    link: 600,
    bold: 700,
    heading: 800
  },
  lineHeights: {
    body: 1.5,
    heading: 1.3
  },
  borderRadius: '5px',
  borderColor: '#272C35',
  padding: {
    button: '0 15px'
  }
};

interface ThemesProps {
  [key: string]: DefaultTheme;
}

export const themes = {
  light: { ...defaultTheme, ...lightTheme },
  dark: { ...defaultTheme, ...darkTheme }
} as ThemesProps;
export default ThemeProvider;
