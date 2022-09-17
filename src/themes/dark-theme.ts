import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0ecb81",
    },
    secondary: {
      main: "#f6465d",
    },
    text: {
      primary: "#b7bdc6",
      secondary: "#848e9c",
    },
    background: {
      default: "#161a1e",
    },
  },
  typography: {
    body2: {
      fontSize: 12,
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "none",
          padding: 0,
          lineHeight: "20px",
        },
      },
    },
  },
});
