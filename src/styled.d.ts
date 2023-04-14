// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    family: string;
    fs: {
      small: string;
      normal: string;
      large: string;
      heading: string;
    };
    fw: {
      light: number;
      normal: number;
      bold: number;
    };
    radius: string;
    colors: {
      text: string;
      bg: string;
      uiBase: string;
      altBase: string;
    };
    shadow: string;
  }
}
