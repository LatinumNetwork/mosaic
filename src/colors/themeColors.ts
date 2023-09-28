type ColorShade = {
  main: string;
  dark: string;
  light: string;
};

type ThemeColors = {
  primary: ColorShade;
  secondary: ColorShade;
  error: ColorShade;
  warning: ColorShade;
  success: ColorShade;
};

const themeColors: ThemeColors = {
  primary: {
    main: '#954661',
    dark: '#7b1839',
    light: '#a7647a',
  },
  secondary: {
    main: '#c16f8b',
    dark: '#b14b6e',
    light: '#cb869e',
  },
  error: {
    main: '#CC3333',
    light: '#d65c5c',
    dark: '#ba2e2e',
  },
  warning: {
    main: '#d5902f',
    light: '#ea9e34',
    dark: '#a67025',
  },
  success: {
    main: '#18914c',
    light: '#46a770',
    dark: '#168445',
  },
};

export default themeColors;
