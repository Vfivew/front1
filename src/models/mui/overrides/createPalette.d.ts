// eslint-disable-next-line
import * as createPalette from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }

  interface PaletteColor {
    primary: string;
    secondary: string;
    basic: string;
    gradient: string;
    red: string;
    white: string;
  }

  interface SimplePaletteColorOptions {
    secondary?: string;
    basic?: string;
    gradient?: string;
    red?: string;
    white?: string;
  }

  interface TypeText {
    basic?: string;
    accent?: string;
    error?: string;
    black?: string;
    white?: string;
    grey?: string;
    lightGrey?: string;
    headerText?: string;
    green?: string;
  }

  interface TypeBackground {
    black?: string;
    divider?: string;
    backgroundGradient?: string;
    shadow?: string;
    cardRedColor: string;
    cardBlueColor: string;
    cardLightPurpleColor: string;
    cardLightGreenColor: string;
  }

  interface CommonColors {
    blackOpacity: string;
    whiteOpacity: string;
  }
}
