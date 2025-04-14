import { ReactNode, useMemo } from 'react';

import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import breakpoints from './breakpoints';
import componentsOverride from './overrides';
import palette from './palette';
import Typography from './typography';

type ThemeCustomizationProps = {
  children: ReactNode;
};

export default function ThemeCustomization({
  children,
}: ThemeCustomizationProps) {
  const breakpointsTheme = useMemo(
    () =>
      createTheme({
        breakpoints: {
          values: breakpoints,
        },
      }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        ...breakpointsTheme,
        mixins: {
          toolbar: {
            minHeight: 60,
            paddingTop: 8,
            paddingBottom: 8,
          },
        },
        palette: palette,
        typography: Typography(breakpointsTheme),
      }),
    [breakpointsTheme],
  );

  // @ts-expect-error: Ignoring incompatible types for componentsOverride
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
