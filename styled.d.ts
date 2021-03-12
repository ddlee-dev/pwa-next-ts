// import original module declarations
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bg: {
      primary: string;
      secondary: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
    fontSizes: {
      body: string;
    };
    fontWeights: {
      body: number;
      subheading: number;
      link: number;
      bold: number;
      heading: number;
    };
    lineHeights: {
      body: number;
      heading: number;
    };
    borderRadius: string;
    borderColor: string;
    padding: {
      button: string;
    };
  }
}
