'use client';

import { createTheme } from "@mui/material";

const DEFAULT_BACKGROUND_COLOR = "#EEF7FF";
const PAPER_BACKGROUND_COLOR = "white"
const PRIMARY_COLOR_MAIN = "#3282B8";
const SECONDARY_COLOR_MAIN = "#0E46A3";

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: DEFAULT_BACKGROUND_COLOR,
      paper: PAPER_BACKGROUND_COLOR,
    },
    primary: {
      main: PRIMARY_COLOR_MAIN,
    },
    secondary: {
      main: SECONDARY_COLOR_MAIN,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: PAPER_BACKGROUND_COLOR,
          boxShadow: "unset",
        },
      },
    },
  },
});

export default theme;
