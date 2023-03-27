const typography = {
  family: "Nunito Sans",
  fs: {
    small: "0.875rem",
    normal: "1rem",
    large: "1.125rem",
    heading: "2rem",
  },
  fw: {
    light: 300,
    normal: 600,
    bold: 800,
  },
};
const graphics = {
  radius: "0.5rem",
};

//Themes pallete
const light = {
  colors: {
    text: "hsl(200, 15%, 8%)",
    bg: "hsl(0, 0%, 98%)",
    uiBase: "hsl(0, 0%, 100%)",
  },
  shadow: " rgba(149, 157, 165, 0.2) 0 8px 24px",
};

const dark = {
  colors: {
    text: "hsl(0, 0%, 100%)",
    bg: "hsl(207, 26%, 17%)",
    uiBase: "hsl(209, 23%, 22%)",
  },
  shadow: "rgba(245, 245, 245, 0.2) 0 0 8px",
};

export const lightTheme = Object.assign({}, light, typography, graphics);
export const darkTheme = Object.assign({}, dark, typography, graphics);
