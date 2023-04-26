import { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "./typography";
import ComponentsOverrides from "./overrides";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "./createEmotionCache";

export default function ThemeCustomization({ children }) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const themeTypography = Typography(`"SF Pro Text"`);
  const contrastText = "#fff";
  const themeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1536,
        },
      },

      palette: {
        background: {
          default: "#06051A",
        },
        text: {
          primary: "#fff",
        },
        primary: {
          main: "#834331",
          light: "#FDFBF4",
          gray: "#4B5563",
          darker: "#223C25",
          contrastText,
        },
        secondary: {
          main: "#A87B6F",
          light: "#E9CFC1",
          contrastText,
        },
        info: {
          main: "#FDFBF4",
        },
      },

      typography: themeTypography,
    }),
    [themeTypography]
  );

  const themes = createTheme(themeOptions);
  themes.components = ComponentsOverrides();
  const cache = createEmotionCache();

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
