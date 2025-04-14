// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as createPalette from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      gray: string;
      backgroundColor: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      gray?: string;
      backgroundColor?: string;
    };
  }
}
