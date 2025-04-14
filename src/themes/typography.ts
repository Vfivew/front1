import { Theme, TypographyVariantsOptions } from '@mui/material/styles';

const BASE_FONT_SIZE: number = 16;

export function remToPx(value: string) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

/* eslint-disable @typescript-eslint/no-unused-vars */
const Typography = (_theme: Theme): TypographyVariantsOptions => {
  return {
    htmlFontSize: BASE_FONT_SIZE,
    fontFamily: 'Montserrat, sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontWeight: 600,
      fontSize: pxToRem(64),
      lineHeight: '80px',
    },
    h2: {
      fontWeight: 600,
      fontSize: pxToRem(48),
      lineHeight: '56px',
    },
    h3: {
      fontWeight: 600,
      fontSize: pxToRem(32),
      lineHeight: '40px',
    },
    h4: {
      fontWeight: 700,
      fontSize: pxToRem(24),
      lineHeight: '32px',
    },
    h5: {
      fontWeight: 700,
      fontSize: pxToRem(20),
      lineHeight: '24px',
    },
    h6: {
      fontWeight: 700,
      fontSize: pxToRem(16),
      lineHeight: '24px',
    },
    body1: {
      fontWeight: 400,
      fontSize: pxToRem(20),
      lineHeight: '32px',
    },
    body2: {
      fontWeight: 500,
      fontSize: pxToRem(16),
      lineHeight: '24px',
    },
    body3: {
      fontWeight: 500,
      fontSize: pxToRem(14),
      lineHeight: '24px',
    },
    body4: {
      fontWeight: 500,
      fontSize: pxToRem(12),
      lineHeight: '24px',
    },
    caption: {
      fontWeight: 400,
      fontSize: pxToRem(14),
      lineHeight: '16px',
    },
  };
};

export default Typography;
